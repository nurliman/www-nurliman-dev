import { mergeProps, splitProps, type ValidComponent } from "solid-js";
import type { VariantProps } from "cva";
import { Dynamic } from "solid-js/web";
import { cva, cx } from "cva";

const badgeVariant = cva({
  variants: {
    color: {
      white: "bg-white text-black dark:bg-black dark:text-white",
      zinc: "bg-zinc-200 text-black dark:bg-zinc-900 dark:text-white",
      teal: "bg-teal-600 text-white",
    },
    border: {
      sm: "border",
      true: "border-2",
    },
    rounded: {
      false: "rounded",
      true: "rounded-full",
    },
    shadow: {
      sm: "brutal-shadow-sm",
      true: "brutal-shadow",
    },
  },
});

export type BadgeVariant = VariantProps<typeof badgeVariant>;

export type TheBadgeProps = BadgeVariant & {
  children?: any;
  component?: ValidComponent;
  class?: string;
};

export default function TheBadge(props: TheBadgeProps) {
  props = mergeProps(
    {
      color: "white" as BadgeVariant["color"],
      border: true as BadgeVariant["border"],
      shadow: true as BadgeVariant["shadow"],
      rounded: false as BadgeVariant["rounded"],
      component: "div" as ValidComponent,
    },
    props,
  );

  const [localProps, badgeProps, restProps] = splitProps(
    props,
    ["children", "component", "class"],
    ["color", "border", "rounded", "shadow"],
  );

  return (
    <Dynamic
      component={localProps.component}
      class={cx(badgeVariant(badgeProps), localProps.class)}
      {...restProps}
    >
      {localProps.children}
    </Dynamic>
  );
}
