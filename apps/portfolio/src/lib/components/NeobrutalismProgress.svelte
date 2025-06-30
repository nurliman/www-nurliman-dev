<script lang="ts">
  import { cn, type WithoutChildrenOrChild } from "$lib/utils/shadcn.js";
  import { Progress as ProgressPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    max = 100,
    value,
    label,
    ...restProps
  }: WithoutChildrenOrChild<ProgressPrimitive.RootProps> & {
    label?: string;
  } = $props();

  const percentage = $derived(Math.round(((value ?? 0) / (max ?? 1)) * 100));

  // Generate accessible label if not provided via aria-label in restProps
  const accessibleLabel = $derived.by(() => {
    if (restProps["aria-label"]) return restProps["aria-label"];
    if (label) return `${label}: ${percentage}% progress`;
    return `Progress: ${percentage}%`;
  });
</script>

<ProgressPrimitive.Root
  bind:ref
  data-slot="progress"
  aria-label={accessibleLabel}
  class={cn(
    "relative h-4 w-full overflow-hidden p-0",
    "border-2 border-black bg-white dark:border-zinc-800 dark:bg-zinc-900",
    className,
  )}
  {value}
  {max}
  {...restProps}
>
  <div
    data-slot="progress-indicator"
    class={[
      "size-full flex-1",
      "border-r-2 border-black dark:border-zinc-800",
      "bg-teal-500 transition-all",
    ]}
    style="transform: translateX(-{100 - percentage}%)"
  ></div>
</ProgressPrimitive.Root>
