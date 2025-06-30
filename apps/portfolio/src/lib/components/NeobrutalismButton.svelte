<script lang="ts" module>
  import { cn, type WithElementRef } from "$lib/utils/shadcn";
  import { clsx } from "clsx";
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
  import { tv, type VariantProps } from "tailwind-variants";

  export const buttonVariants = tv({
    base: clsx(
      "inline-flex items-center justify-center whitespace-nowrap gap-2",
      "text-sm font-medium",
      "ring-offset-white transition-all",
      "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    ),
    variants: {
      variant: {
        default: clsx(
          "text-white bg-teal-500",
          "border-2 border-black dark:border-zinc-800 shadow-neobrutalism",
          "hover:translate-1 hover:shadow-none",
        ),
        noShadow: "text-white bg-teal-500 border-2 border-black dark:border-zinc-800",
        neutral: clsx(
          "bg-white dark:bg-zinc-900 text-black dark:text-white",
          "border-2 border-black dark:border-zinc-800 shadow-neobrutalism",
          "hover:translate-1 hover:shadow-none",
        ),
        reverse: clsx(
          "text-white bg-teal-500",
          "border-2 border-black dark:border-zinc-800",
          "hover:-translate-1",
          "hover:shadow-neobrutalism",
        ),
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  });

  export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
  export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

  export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
    WithElementRef<HTMLAnchorAttributes> & {
      variant?: ButtonVariant;
      size?: ButtonSize;
    };
</script>

<script lang="ts">
  let {
    class: className,
    variant = "default",
    size = "default",
    ref = $bindable(null),
    href = undefined,
    type = "button",
    disabled,
    children,
    ...restProps
  }: ButtonProps = $props();
</script>

{#if href}
  <a
    bind:this={ref}
    data-slot="brutailsm-button"
    class={cn(buttonVariants({ variant, size }), className)}
    href={disabled ? undefined : href}
    aria-disabled={disabled}
    role={disabled ? "link" : undefined}
    tabindex={disabled ? -1 : undefined}
    {...restProps}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    bind:this={ref}
    data-slot="brutailsm-button"
    class={cn(buttonVariants({ variant, size }), className)}
    {type}
    {disabled}
    {...restProps}
  >
    {@render children?.()}
  </button>
{/if}
