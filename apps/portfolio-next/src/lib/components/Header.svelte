<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { sections } from "$lib/data/sections";
  import HamburgerButton from "./HamburgerButton.svelte";
  import ThemeSwithcerButton from "./ThemeSwithcerButton.svelte";

  let headerHeight = 50;
  let menuOpened = false;
  const menuX = tweened(-100, {
    duration: 200,
    easing: cubicOut,
  });
  const backdropOpacity = tweened(0, {
    duration: 300,
    easing: cubicOut,
  });
  const openMenu = () => {
    menuX.set(0);
    backdropOpacity.set(0.5);
    menuOpened = true;
  };
  const closeMenu = () => {
    menuX.set(-100);
    backdropOpacity.set(0);
    menuOpened = false;
  };
  const toggleMenu = () => {
    if (menuOpened) {
      closeMenu();
    } else {
      openMenu();
    }
  };
</script>

<header class="sticky top-0 z-30 overflow-hidden border-b-2 bg-white p-0">
  <div class="mx-auto flex max-w-[90rem] items-center justify-between">
    <HamburgerButton class="md:hidden" isOpen={menuOpened} on:click={toggleMenu} />
    <div class="logo">nurliman.</div>
    <div class="hidden h-7 w-px bg-zinc-600 md:flex" />
    <nav class="hidden md:contents">
      <ul class="flex flex-1 flex-row px-3 text-xs uppercase">
        {#each sections as section (section.id)}
          <li class="contents">
            <a
              href={section.link}
              class="the-white-button rounded-full px-3 py-1.5"
              on:click={closeMenu}
            >
              {section.name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    <ThemeSwithcerButton />
  </div>
</header>

<button
  type="button"
  class="fixed inset-0 z-10 bg-black opacity-0 md:hidden"
  class:pointer-events-auto={menuOpened}
  class:pointer-events-none={!menuOpened}
  style:opacity={$backdropOpacity}
  on:click={toggleMenu}
/>

<div
  class="absolute z-40 w-screen border-r bg-white shadow sm:max-w-xs md:hidden"
  style:height={`calc(100vh - ${headerHeight}px)`}
  style:transform="translate3d({$menuX}%,0,0)"
  style:top={headerHeight + "px"}
>
  <nav class="contents">
    <ul class="flex flex-col text-xs uppercase">
      {#each sections as section (section.id)}
        <li class="contents">
          <a
            href={section.link}
            class="the-white-button border-b px-8 py-3 hover:font-semibold"
            on:click={closeMenu}
          >
            {section.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style lang="postcss" module>
  .logo {
    @apply font-racing-sans text-[1.75rem];
    @apply max-md:absolute-center;
    @apply md:text-3xl;
    @apply md:px-4 md:py-2;
  }
</style>
