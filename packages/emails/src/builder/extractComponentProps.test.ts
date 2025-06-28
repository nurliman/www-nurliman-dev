import { describe, expect, it } from "bun:test";
import { extractComponentProps } from "./extractComponentProps";

describe("extractReactComponentProps", () => {
  describe("Component Definition Variations", () => {
    it("should extract props from function declaration component", () => {
      const code = `
        interface MyComponentProps {
          title: string;
          count?: number;
        }

        function MyComponent(props: MyComponentProps) {
          return <div>{props.title}</div>;
        }

        export default MyComponent;
      `;

      const result = extractComponentProps(code);
      expect(result).toEqual({
        componentName: "MyComponent",
        props: [
          { name: "title", type: "string", optional: false },
          { name: "count", type: "number", optional: true },
        ],
      });
    });

    it("should extract props from arrow function component", () => {
      const code = `
        interface ButtonProps {
          label: string;
          disabled?: boolean;
        }

        const Button = (props: ButtonProps) => {
          return <button disabled={props.disabled}>{props.label}</button>;
        };

        export default Button;
      `;

      const result = extractComponentProps(code);
      expect(result).toEqual({
        componentName: "Button",
        props: [
          { name: "label", type: "string", optional: false },
          { name: "disabled", type: "boolean", optional: true },
        ],
      });
    });

    it("should extract props from const arrow function component", () => {
      const code = `
        type CardProps = {
          title: string;
          description?: string;
        };

        const Card: React.FC<CardProps> = ({ title, description }) => {
          return <div><h1>{title}</h1><p>{description}</p></div>;
        };

        export default Card;
      `;

      const result = extractComponentProps(code);
      expect(result).toEqual({
        componentName: "Card",
        props: [
          { name: "title", type: "string", optional: false },
          { name: "description", type: "string", optional: true },
        ],
      });
    });
  });

  describe("Export Variations", () => {
    it("should handle inline default export function", () => {
      const code = `
        interface HeaderProps {
          title: string;
        }

        export default function Header(props: HeaderProps) {
          return <h1>{props.title}</h1>;
        }
      `;

      const result = extractComponentProps(code);
      expect(result).toEqual({
        componentName: "Header",
        props: [{ name: "title", type: "string", optional: false }],
      });
    });

    it("should handle separate default export", () => {
      const code = `
        interface FooterProps {
          year: number;
          company?: string;
        }

        function Footer(props: FooterProps) {
          return <footer>{props.company} © {props.year}</footer>;
        }

        export default Footer;
      `;

      const result = extractComponentProps(code);
      expect(result).toEqual({
        componentName: "Footer",
        props: [
          { name: "year", type: "number", optional: false },
          { name: "company", type: "string", optional: true },
        ],
      });
    });

    it("should handle anonymous default export", () => {
      const code = `
        interface AnonymousProps {
          message: string;
        }

        export default (props: AnonymousProps) => {
          return <div>{props.message}</div>;
        };
      `;

      const result = extractComponentProps(code);
      expect(result).toEqual({
        componentName: "UnknownComponent",
        props: [{ name: "message", type: "string", optional: false }],
      });
    });
  });

  describe("Props Type Variations", () => {
    it("should handle interface props definition", () => {
      const code = `
        interface ComponentProps {
          name: string;
          age: number;
          active: boolean;
        }

        export default function Component(props: ComponentProps) {
          return <div />;
        }
      `;

      const result = extractComponentProps(code);
      expect(result?.props).toEqual([
        { name: "active", type: "boolean", optional: false },
        { name: "age", type: "number", optional: false },
        { name: "name", type: "string", optional: false },
      ]);
    });

    it("should handle type alias props definition", () => {
      const code = `
        type ComponentProps = {
          title: string;
          count?: number;
        };

        export default function Component(props: ComponentProps) {
          return <div />;
        }
      `;

      const result = extractComponentProps(code);
      expect(result?.props).toEqual([
        { name: "title", type: "string", optional: false },
        { name: "count", type: "number", optional: true },
      ]);
    });

    it("should handle complex type definitions", () => {
      const code = `
        interface ComplexProps {
          items: string[];
          status: "loading" | "success" | "error";
          metadata?: { [key: string]: any };
          onClick: (id: number) => void;
          config: {
            theme: "light" | "dark";
            size: number;
          };
        }

        export default function Complex(props: ComplexProps) {
          return <div />;
        }
      `;

      const result = extractComponentProps(code);
      expect(result?.props).toEqual([
        { name: "config", type: "object", optional: false },
        { name: "items", type: "string[]", optional: false },
        { name: "onClick", type: "function", optional: false },
        { name: "status", type: '"loading" | "success" | "error"', optional: false },
        { name: "metadata", type: "object", optional: true },
      ]);
    });

    it("should handle generic types", () => {
      const code = `
        interface GenericProps<T> {
          data: T[];
          render: (item: T) => React.ReactNode;
          defaultValue?: T;
        }

        export default function Generic<T>(props: GenericProps<T>) {
          return <div />;
        }
      `;

      const result = extractComponentProps(code);
      expect(result?.props).toEqual([
        { name: "data", type: "T[]", optional: false },
        { name: "render", type: "function", optional: false },
        { name: "defaultValue", type: "T", optional: true },
      ]);
    });
  });

  describe("Edge Cases", () => {
    it("should handle component with no props", () => {
      const code = `
        export default function NoProps() {
          return <div>No props here</div>;
        }
      `;

      const result = extractComponentProps(code);
      expect(result).toEqual({
        componentName: "NoProps",
        props: [],
      });
    });

    it("should handle multiple interfaces and pick the Props one", () => {
      const code = `
        interface SomeOtherInterface {
          value: string;
        }

        interface ComponentProps {
          title: string;
          subtitle?: string;
        }

        interface AnotherInterface {
          data: number;
        }

        export default function Component(props: ComponentProps) {
          return <div />;
        }
      `;

      const result = extractComponentProps(code);
      expect(result?.props).toEqual([
        { name: "title", type: "string", optional: false },
        { name: "subtitle", type: "string", optional: true },
      ]);
    });

    it("should handle props interface with different naming patterns", () => {
      const code = `
        interface MyComponentPropsInterface {
          name: string;
        }

        export default function MyComponent(props: MyComponentPropsInterface) {
          return <div />;
        }
      `;

      const result = extractComponentProps(code);
      expect(result?.props).toEqual([{ name: "name", type: "string", optional: false }]);
    });

    it("should return null for invalid code", () => {
      const code = `
        this is not valid javascript/typescript code {{{
      `;

      // Silence console.error during this test
      const originalError = console.error;
      console.error = () => {};

      const result = extractComponentProps(code);
      expect(result).toBeNull();

      // Restore console.error
      console.error = originalError;
    });

    it("should handle empty file", () => {
      const code = "";

      const result = extractComponentProps(code);
      expect(result).toEqual({
        componentName: "UnknownComponent",
        props: [],
      });
    });

    it("should handle file with only comments", () => {
      const code = `
        // This is just a comment
        /* And this is a block comment */
      `;

      const result = extractComponentProps(code);
      expect(result).toEqual({
        componentName: "UnknownComponent",
        props: [],
      });
    });
  });

  describe("Real-world Examples", () => {
    it("should handle React.FC with destructured props", () => {
      const code = `
        interface UserCardProps {
          user: {
            id: number;
            name: string;
            email: string;
          };
          showEmail?: boolean;
          onEdit?: (userId: number) => void;
        }

        const UserCard: React.FC<UserCardProps> = ({ user, showEmail = false, onEdit }) => {
          return (
            <div>
              <h3>{user.name}</h3>
              {showEmail && <p>{user.email}</p>}
              {onEdit && <button onClick={() => onEdit(user.id)}>Edit</button>}
            </div>
          );
        };

        export default UserCard;
      `;

      const result = extractComponentProps(code);
      expect(result).toEqual({
        componentName: "UserCard",
        props: [
          { name: "user", type: "object", optional: false },
          { name: "onEdit", type: "function", optional: true },
          { name: "showEmail", type: "boolean", optional: true },
        ],
      });
    });

    it("should handle component with children prop", () => {
      const code = `
        interface LayoutProps {
          title: string;
          children: React.ReactNode;
          className?: string;
        }

        export default function Layout({ title, children, className }: LayoutProps) {
          return (
            <div className={className}>
              <h1>{title}</h1>
              <main>{children}</main>
            </div>
          );
        }
      `;

      const result = extractComponentProps(code);
      expect(result).toEqual({
        componentName: "Layout",
        props: [
          { name: "children", type: "React.ReactNode", optional: false },
          { name: "title", type: "string", optional: false },
          { name: "className", type: "string", optional: true },
        ],
      });
    });
  });
});
