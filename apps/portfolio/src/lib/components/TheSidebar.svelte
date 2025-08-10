<script lang="ts">
  import { page } from "$app/state";
  import { Button } from "$lib/components/ui/button";
  import { sections } from "$lib/data/sections";
  import { isActivePath } from "$lib/utils/isActivePath";
  import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
  import { onDestroy } from "svelte";

  type Props = {
    isOpen: boolean;
    headerHeight: number;
    onChange?: (isOpen: boolean) => void;
  };

  let { isOpen, headerHeight, onChange }: Props = $props();
  let sidebarElement: HTMLDivElement;

  // Lock body scroll when sidebar is open
  $effect(() => {
    if (!sidebarElement) return;
    if (isOpen) {
      disableBodyScroll(sidebarElement);
    } else {
      enableBodyScroll(sidebarElement);
    }
  });

  // Cleanup on component destroy
  onDestroy(() => {
    if (!sidebarElement) return;
    enableBodyScroll(sidebarElement);
  });
</script>

<!-- Overlay button -->
<button
  type="button"
  class={[
    "fixed inset-0 z-10 w-screen bg-black",
    "transition-opacity duration-300 ease-out",
    "md:hidden",
    isOpen ? "pointer-events-auto opacity-50" : "pointer-events-none opacity-0",
  ]}
  style:height="calc(100% - {headerHeight}px)"
  style:top="{headerHeight}px"
  style:transform="translateZ(0)"
  onclick={() => onChange?.(false)}
  aria-label="Sidebar overlay"
  aria-hidden={!isOpen}
  tabindex={isOpen ? 0 : -1}
>
</button>

<!-- Sidebar -->
<div
  bind:this={sidebarElement}
  class={[
    "fixed z-40 flex w-screen flex-col md:hidden",
    "bg-background text-foreground border-r border-black dark:border-zinc-800",
    "transition-all duration-300 ease-out will-change-transform",
    "overflow-auto sm:max-w-xs",
  ]}
  style:height="calc(100vh - {headerHeight}px)"
  style:top="{headerHeight}px"
  style:transform="translate3d({isOpen ? '0' : '-100%'}, 0, 0)"
>
  <nav class="contents">
    <ul class="flex flex-col text-xs uppercase">
      {#each sections as section (section.id)}
        <li class="contents">
          <Button
            href={section.link}
            variant="ghost"
            class={[
              "cursor-pointer !justify-start !rounded-none",
              "border-b border-black dark:border-zinc-800",
              "!px-8 !py-5 text-xs font-normal",
              isActivePath(section.link, page.url.pathname) && "menu-link-active",
            ]}
            onclick={() => onChange?.(false)}
          >
            {section.name}
          </Button>
        </li>
      {/each}
    </ul>
  </nav>
</div>
