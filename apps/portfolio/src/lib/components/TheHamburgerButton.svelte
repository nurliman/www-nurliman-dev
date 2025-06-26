<script lang="ts">
  import { Button, type ButtonProps } from "$lib/components/ui/button";
  import { cn } from "$lib/utils/shadcn";

  type Props = {
    isSidebarOpen: boolean;
  } & ButtonProps;

  let { isSidebarOpen, class: className, ...restProps }: Props = $props();
</script>

<Button
  {...restProps}
  variant="ghost"
  size="sm"
  class={cn(
    "flex-center relative !h-auto !min-h-[3rem] !w-12",
    "!rounded-none border-r",
    "cursor-pointer",
    className,
  )}
>
  <img
    src="/assets/menu-burger.svg"
    alt="Menu"
    height="28"
    width="28"
    loading="lazy"
    class={cn(
      "absolute-center transition-opacity dark:hidden",
      isSidebarOpen ? "opacity-0" : "opacity-100",
    )}
  />
  <img
    src="/assets/menu-close.svg"
    alt="Close"
    height="28"
    width="28"
    loading="lazy"
    class={cn(
      "absolute-center transition-opacity dark:hidden",
      isSidebarOpen ? "opacity-100" : "opacity-0",
    )}
  />
  <img
    src="/assets/menu-burger-dark.svg"
    alt="Menu"
    height="28"
    width="28"
    loading="lazy"
    class={cn(
      "absolute-center hidden transition-opacity dark:block",
      isSidebarOpen ? "opacity-0" : "opacity-100",
    )}
  />
  <img
    src="/assets/menu-close-dark.svg"
    alt="Close"
    height="28"
    width="28"
    loading="lazy"
    class={cn(
      "absolute-center hidden transition-opacity dark:block",
      isSidebarOpen ? "opacity-100" : "opacity-0",
    )}
  />
</Button>
