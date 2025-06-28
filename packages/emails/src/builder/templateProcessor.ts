import fs from "node:fs/promises";
import path from "node:path";
import { render } from "@react-email/components";
import { pascalCase } from "change-case";
import escape from "lodash-es/escape";
import { extractComponentProps } from "./extractComponentProps";
import { generateCode } from "./templateGenerator";
import type { BuildResult } from "./types";
import { createPlaceholders } from "./utils";

export const processTemplate = async (
  filepath: string,
  outputDir: string,
  verbose: boolean = false,
): Promise<BuildResult> => {
  const filename = path.basename(filepath, ".tsx");
  const templateName = pascalCase(filename);
  const outputPath = path.join(outputDir, `${templateName}.ts`);

  if (verbose) {
    console.log(`📧 Processing: ${filename}`);
  }

  try {
    // 1. Read and analyze the template
    const fileContent = await fs.readFile(filepath, "utf-8");
    const componentInfo = extractComponentProps(fileContent);
    const props = componentInfo?.props || [];

    // 2. Import and render the template
    const templateModule = await import(filepath);
    const TemplateComponent = templateModule.default;

    if (!TemplateComponent) {
      throw new Error("No default export found");
    }

    // 3. Generate rendered HTML
    const placeholders = createPlaceholders(props);
    const renderedHtml = await render(TemplateComponent(placeholders));
    const escapedHtml = escape(renderedHtml);

    // 4. Generate the template code
    const outputScript = await generateCode(templateName, escapedHtml, props);
    await fs.writeFile(outputPath, outputScript);

    if (verbose) {
      console.log(`✅ Generated: ${outputPath}`);
      if (props.length > 0) {
        console.log(`📋 Props: ${props.map((p) => `${p.name}: ${p.type}`).join(", ")}`);
      }
    }

    return {
      templateName,
      filename,
      outputPath,
      success: true,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    if (verbose) {
      console.error(`❌ Error processing ${filename}:`, errorMessage);
    }

    return {
      templateName,
      filename,
      outputPath,
      success: false,
      error: errorMessage,
    };
  }
};
