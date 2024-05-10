import { type VariantProps, cva, cx } from "cva";
import type { JSX, ValidComponent } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import { Dynamic, type DynamicProps } from "solid-js/web";

const buttonVariant = cva({
  base: "brutal-btn",
  defaultVariants: {
    color: "white",
  },
  variants: {
    color: {
      "white-pink": "brutal-btn-white-pink",
      white: "brutal-btn-white",
      zinc: "brutal-btn-zinc",
      teal: "brutal-btn-teal",
    },
    border: {
      sm: "brutal-btn-border-sm",
      true: "brutal-btn-border",
    },
    shadow: {
      sm: "brutal-shadow-sm activable",
      true: "brutal-shadow activable",
    },
  },
});

export type ButtonVariant = VariantProps<typeof buttonVariant>;

export type TheButtonBaseProps = ButtonVariant &
  // biome-ignore lint/suspicious/noExplicitAny: using `any` here just to simplify the type
  Pick<JSX.HTMLAttributes<any>, "children" | "class" | "classList">;

export type TheButtonProps<T extends ValidComponent> = TheButtonBaseProps &
  Omit<DynamicProps<T>, keyof TheButtonBaseProps | "component"> & { component?: T };

function TheButton(props: TheButtonProps<"button">): JSX.Element;
function TheButton<T extends ValidComponent>(props: TheButtonProps<T>): JSX.Element;
function TheButton<T extends ValidComponent = "button">(props: TheButtonProps<T>): JSX.Element {
  const propsWithDefaults = mergeProps(
    {
      component: "button",
    },
    props,
  );

  const [localProps, buttonVariantProps, restProps] = splitProps(
    propsWithDefaults,
    ["children", "component", "class", "classList"],
    ["color", "border", "shadow"],
  );

  return (
    <Dynamic
      component={localProps.component as "button" | NonNullable<T>}
      class={cx(buttonVariant(buttonVariantProps), localProps.class, localProps.classList)}
      {...restProps}
    >
      {localProps.children}
    </Dynamic>
  );
}

export default TheButton;
