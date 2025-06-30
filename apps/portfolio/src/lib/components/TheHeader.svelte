<script lang="ts">
  import { page } from "$app/state";
  import TheHamburgerButton from "$lib/components/TheHamburgerButton.svelte";
  import TheSidebar from "$lib/components/TheSidebar.svelte";
  import TheThemeSwitcher from "$lib/components/TheThemeSwitcher.svelte";
  import { Button } from "$lib/components/ui/button";
  import { sections } from "$lib/data/sections";
  import { isActivePath } from "$lib/utils/isActivePath";

  let headerHeight = 50;
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
  bind:offsetHeight={headerHeight}
  class={[
    "fixed top-0 z-30 w-full overflow-hidden",
    "border-b-2 border-black bg-white/60 transition-colors",
    "dark:border-zinc-800 dark:bg-[#1d1d1f]/40 dark:text-white",
  ]}
  style:backdrop-filter="blur(20px) saturate(180%)"
  style:-webkit-backdrop-filter="blur(20px) saturate(180%)"
  style:-moz-backdrop-filter="blur(20px) saturate(180%)"
  style:-o-backdrop-filter="blur(20px) saturate(180%)"
  style:-ms-backdrop-filter="blur(20px) saturate(180%)"
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
              class={[
                "h-fit !rounded-full !px-3 !py-1.5 !text-xs font-normal uppercase",
                isActivePath(section.link, page.url.pathname) && "menu-link-active",
              ]}
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

<TheSidebar {headerHeight} isOpen={sidebarOpened} onChange={changeSidebarOpened} />
