<script lang="ts">
  import { clsx } from "clsx";
  let isSidebarOpen: boolean;
  let className: string | undefined = undefined;
  export { className as class, isSidebarOpen };
</script>

<button
  class={clsx(
    "flex-center the-white-button relative",
    "h-auto min-h-[3rem] w-12 border-r",
    className,
  )}
  on:click
>
  <img
    src="/assets/menu-burger.svg"
    alt="Menu"
    height="28px"
    width="28px"
    class="absolute-center transition-opacity"
    class:opacity-0={isSidebarOpen}
    class:opacity-100={!isSidebarOpen}
  />
  <img
    src="/assets/menu-close.svg"
    alt="Close"
    height="28px"
    width="28px"
    class="absolute-center transition-opacity"
    class:opacity-0={!isSidebarOpen}
    class:opacity-100={isSidebarOpen}
  />
</button>
