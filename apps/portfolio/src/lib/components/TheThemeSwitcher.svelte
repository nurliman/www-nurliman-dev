<script lang="ts">
  import { Button, type ButtonProps } from "$lib/components/ui/button";
  import { cn } from "$lib/utils/shadcn";
  import { toggleMode } from "mode-watcher";

  let { class: className, ...restProps }: ButtonProps = $props();
</script>

<Button
  {...restProps}
  size="icon"
  variant="ghost"
  class={cn("relative !size-10 cursor-pointer rounded-lg dark:!border", className)}
  onclick={() => toggleMode()}
>
  <img
    src="/assets/moon.svg"
    alt="Moon"
    height="24px"
    width="24px"
    loading="lazy"
    class="absolute-center opacity-100 transition-opacity dark:opacity-0"
  />
  <img
    src="/assets/sun.svg"
    alt="Sun"
    height="27px"
    width="27px"
    loading="lazy"
    class="absolute-center opacity-0 transition-opacity dark:opacity-100"
  />
</Button>
