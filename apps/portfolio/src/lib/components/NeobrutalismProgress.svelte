<script lang="ts">
  import { cn, type WithoutChildrenOrChild } from "$lib/utils/shadcn.js";
  import { Progress as ProgressPrimitive } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    max = 100,
    value,
    ...restProps
  }: WithoutChildrenOrChild<ProgressPrimitive.RootProps> = $props();
</script>

<ProgressPrimitive.Root
  bind:ref
  data-slot="progress"
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
    style="transform: translateX(-{100 - (100 * (value ?? 0)) / (max ?? 1)}%)"
  ></div>
</ProgressPrimitive.Root>
