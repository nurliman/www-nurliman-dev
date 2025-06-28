import { tsPlugin } from "@sveltejs/acorn-typescript";
import { Parser } from "acorn";
import sortBy from "lodash-es/sortBy";

type PropInfo = {
  name: string;
  type: string;
  optional: boolean;
  defaultValue?: string;
};

type ComponentInfo = {
  componentName: string;
  props: PropInfo[];
};

// Create parser with TypeScript support
const parser = Parser.extend(tsPlugin({ jsx: true }));

/**
 * Extracts props information from a React component TSX file
 * @param fileContent - The content of the TSX file as a string
 * @returns ComponentInfo object containing component name and props
 */
export const extractComponentProps = (fileContent: string): ComponentInfo | null => {
  try {
    // Parse the file content
    const ast = parser.parse(fileContent, {
      ecmaVersion: 2022,
      sourceType: "module",
      locations: true,
    });

    let componentName = "";
    let propsInterface: any = null;
    let defaultExport: any = null;

    // Walk through the AST to find relevant nodes
    const walkNode = (node: any) => {
      if (!node) return;

      // Find TypeScript interface declarations
      if (node.type === "TSInterfaceDeclaration") {
        const interfaceName = node.id.name;
        if (interfaceName.endsWith("Props") || interfaceName.includes("Props")) {
          propsInterface = node;
        }
      }

      // Find type alias declarations
      if (node.type === "TSTypeAliasDeclaration") {
        const typeName = node.id.name;
        if (typeName.endsWith("Props") || typeName.includes("Props")) {
          propsInterface = node;
        }
      }

      // Find default export
      if (node.type === "ExportDefaultDeclaration") {
        defaultExport = node.declaration;
      }

      // Find function declarations/expressions that might be components
      if (node.type === "FunctionDeclaration" || node.type === "ArrowFunctionExpression") {
        if (node.params && node.params.length > 0) {
          const firstParam = node.params[0];
          if (firstParam.typeAnnotation) {
            // Check if it references a props type
            const typeRef = firstParam.typeAnnotation.typeAnnotation;
            if (typeRef && typeRef.type === "TSTypeReference") {
              const typeName = typeRef.typeName.name;
              if (typeName && (typeName.endsWith("Props") || typeName.includes("Props"))) {
                if (node.type === "FunctionDeclaration" && node.id) {
                  componentName = node.id.name;
                }
              }
            }
          }
        }
      }

      // Recursively walk child nodes
      for (const key in node) {
        if (key === "parent") continue;
        const child = node[key];
        if (Array.isArray(child)) {
          child.forEach(walkNode);
        } else if (child && typeof child === "object") {
          walkNode(child);
        }
      }
    };

    walkNode(ast);

    // Extract component name from default export if not found
    if (!componentName && defaultExport) {
      if (defaultExport.type === "FunctionDeclaration" && defaultExport.id) {
        componentName = defaultExport.id.name;
      } else if (defaultExport.type === "Identifier") {
        componentName = defaultExport.name;
      }
    }

    // Extract props from interface/type
    const props: PropInfo[] = [];

    if (propsInterface) {
      let members: any[] = [];

      if (propsInterface.type === "TSInterfaceDeclaration") {
        members = propsInterface.body.body;
      } else if (
        propsInterface.type === "TSTypeAliasDeclaration" &&
        propsInterface.typeAnnotation.type === "TSTypeLiteral"
      ) {
        members = propsInterface.typeAnnotation.members;
      }

      members.forEach((member) => {
        if (member.type === "TSPropertySignature" && member.key) {
          const propName = member.key.name;
          const isOptional = member.optional || false;
          let propType = "any";

          // Extract type information
          if (member.typeAnnotation && member.typeAnnotation.typeAnnotation) {
            propType = extractTypeString(member.typeAnnotation.typeAnnotation);
          }

          props.push({
            name: propName,
            type: propType,
            optional: isOptional,
          });
        }
      });
    }

    // Sort props alphabetically and separate required from optional
    const sortedProps = sortBy(props, ["optional", "name"]);

    return {
      componentName: componentName || "UnknownComponent",
      props: sortedProps,
    };
  } catch (error) {
    console.error("Error parsing file:", error);
    return null;
  }
};

/**
 * Helper function to extract type string from TypeScript AST node
 */
const extractTypeString = (typeNode: any): string => {
  if (!typeNode) return "any";

  switch (typeNode.type) {
    case "TSStringKeyword":
      return "string";
    case "TSNumberKeyword":
      return "number";
    case "TSBooleanKeyword":
      return "boolean";
    case "TSArrayType":
      return `${extractTypeString(typeNode.elementType)}[]`;
    case "TSUnionType":
      return typeNode.types.map((t: any) => extractTypeString(t)).join(" | ");
    case "TSLiteralType":
      if (typeNode.literal.type === "Literal") {
        return typeof typeNode.literal.value === "string"
          ? `"${typeNode.literal.value}"`
          : String(typeNode.literal.value);
      }
      return "literal";
    case "TSTypeReference":
      if (typeNode.typeName) {
        let typeName = extractTypeName(typeNode.typeName);
        if (typeNode.typeParameters && typeNode.typeParameters.params) {
          const params = typeNode.typeParameters.params
            .map((p: any) => extractTypeString(p))
            .join(", ");
          typeName += `<${params}>`;
        }
        return typeName;
      }
      return "unknown";
    case "TSFunctionType":
      return "function";
    case "TSTypeLiteral":
      return "object";
    default:
      return "unknown";
  }
};

/**
 * Helper function to extract qualified type names (handles React.ReactNode, etc.)
 */
const extractTypeName = (typeName: any): string => {
  if (!typeName) return "unknown";

  if (typeName.type === "Identifier") {
    return typeName.name;
  } else if (typeName.type === "TSQualifiedName") {
    const left = extractTypeName(typeName.left);
    const right = extractTypeName(typeName.right);
    return `${left}.${right}`;
  }

  return "unknown";
};
