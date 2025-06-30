<script lang="ts" module>
  import { clsx } from "clsx";
  import { tv, type VariantProps } from "tailwind-variants";

  export const badgeVariants = tv({
    base: clsx([
      "inline-flex items-center justify-center gap-1 w-fit shrink-0 overflow-hidden whitespace-nowrap",
      "px-2.5 py-0.5 text-xs font-medium",
      "border-2 border-black dark:border-zinc-800",
      "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 ring-offset-white",
      "[&>svg]:size-3 [&>svg]:pointer-events-none",
    ]),
    variants: {
      variant: {
        default: "bg-teal-600 text-white",
        neutral: "bg-white dark:bg-zinc-900 text-black dark:text-white",
        zinc: "bg-zinc-200 text-black dark:bg-zinc-900 dark:text-white",
      },
      shadow: {
        md: "shadow-neobrutalism",
        sm: "shadow-neobrutalism-sm",
        none: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      shadow: "none",
    },
  });

  export type BadgeVariantProps = VariantProps<typeof badgeVariants>;
</script>

<script lang="ts">
  import { cn, type WithElementRef } from "$lib/utils/shadcn.js";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  let {
    ref = $bindable(null),
    href,
    class: className,
    shadow = "none",
    variant = "default",
    children,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & BadgeVariantProps = $props();
</script>

<svelte:element
  this={href ? "a" : "span"}
  bind:this={ref}
  data-slot="badge"
  {href}
  class={cn(badgeVariants({ shadow, variant }), className)}
  {...restProps}
>
  {@render children?.()}
</svelte:element>
