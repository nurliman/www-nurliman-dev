<script lang="ts">
  import { page } from "$app/state";
  import TheHamburgerButton from "$lib/components/TheHamburgerButton.svelte";
  import TheThemeSwitcher from "$lib/components/TheThemeSwitcher.svelte";
  import { Button } from "$lib/components/ui/button";
  import * as Sheet from "$lib/components/ui/sheet";
  import { sections } from "$lib/data/sections";
  import { isActivePath } from "$lib/utils/isActivePath";
  import { cn } from "$lib/utils/shadcn";

  const SIDEBAR_WIDTH_MOBILE = "18rem";

  let sidebarOpened = $state(false);

  const changeSidebarOpened = (newState?: boolean) => {
    newState = newState ?? !sidebarOpened;
    sidebarOpened = newState;
  };

  const closeSidebar = () => {
    changeSidebarOpened(false);
  };
</script>

<header
  class={cn(
    "fixed top-0 z-30 w-full overflow-hidden",
    "border-b-2 border-black bg-white/60 transition-colors",
    "dark:border-zinc-800 dark:bg-[#1d1d1f]/40 dark:text-white",
  )}
  style:backdrop-filter="blur(20px) saturate(180%)"
  style:transition-timing-function="cubic-bezier(.28,.11,.32,1)"
  style:transition-duration=".5s"
>
  <div class="mx-auto flex items-center justify-between gap-x-4 md:container md:h-[52px]">
    <TheHamburgerButton
      class="md:hidden"
      isSidebarOpen={sidebarOpened}
      onclick={() => changeSidebarOpened()}
    />

    <div class="max-md:absolute-center flex-center md:py-2">
      <Button
        href="/"
        variant="link"
        class="font-racing-sans !p-0 text-[1.75rem] md:text-3xl"
        onclick={() => closeSidebar()}
      >
        nurliman.
      </Button>
    </div>

    <div class="hidden h-7 w-px bg-zinc-600 md:flex"></div>

    <nav class="hidden md:contents">
      <ul class="flex flex-1 flex-row items-center">
        {#each sections as section (section.id)}
          <li class="contents">
            <Button
              href={section.link}
              size="sm"
              variant="ghost"
              class={cn(
                "h-fit !rounded-full !px-3 !py-1.5 !text-xs font-normal uppercase",
                isActivePath(section.link, page.url.pathname) && "menu-link-active",
              )}
              onclick={() => closeSidebar()}
            >
              {section.name}
            </Button>
          </li>
        {/each}
      </ul>
    </nav>

    <TheThemeSwitcher class="relative max-md:right-2" />
  </div>
</header>

<Sheet.Root bind:open={sidebarOpened}>
  <Sheet.Content
    data-sidebar="sidebar"
    data-slot="sidebar"
    data-mobile="true"
    class={cn(
      "bg-sidebar text-sidebar-foreground",
      "border-r border-black dark:border-zinc-800",
      "w-(--sidebar-width) p-0",
      "[&>button]:hidden",
    )}
    style="--sidebar-width: {SIDEBAR_WIDTH_MOBILE};"
    side="left"
  >
    <Sheet.Header class="sr-only">
      <Sheet.Title>Main Menu</Sheet.Title>
      <Sheet.Description>Navigate to different sections of the site.</Sheet.Description>
    </Sheet.Header>
    <div class="flex h-full w-full flex-col">
      <nav class="contents">
        <ul class="flex flex-col text-xs uppercase">
          {#each sections as section (section.id)}
            <li class="contents">
              <Button
                href={section.link}
                variant="ghost"
                class={cn(
                  "!justify-start !px-8 !py-5",
                  "!rounded-none border-b border-black dark:border-zinc-800",
                  "text-xs font-normal",
                  isActivePath(section.link, page.url.pathname) && "menu-link-active",
                )}
                onclick={() => closeSidebar()}
              >
                {section.name}
              </Button>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  </Sheet.Content>
</Sheet.Root>
