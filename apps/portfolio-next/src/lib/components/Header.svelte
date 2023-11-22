<script lang="ts">
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { sections } from "$lib/data/sections";
  import HamburgerButton from "./HamburgerButton.svelte";

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
  const toggleMenu = () => {
    menuX.set(menuOpened ? -100 : 0, {
      delay: menuOpened ? 0 : 80,
    });
    backdropOpacity.set(menuOpened ? 0 : 0.5, {
      delay: menuOpened ? 80 : 0,
    });
    menuOpened = !menuOpened;
  };
</script>

<header class="sticky top-0 z-30 flex border-b-2 bg-white p-0">
  <HamburgerButton isOpen={menuOpened} on:click={toggleMenu} />
</header>

<button
  type="button"
  class="fixed inset-0 z-10 bg-black opacity-0"
  class:pointer-events-auto={menuOpened}
  class:pointer-events-none={!menuOpened}
  style:opacity={$backdropOpacity}
  on:click={toggleMenu}
/>

<div
  class="absolute z-40 w-screen border-r bg-white shadow md:max-w-xs"
  style:height={`calc(100vh - ${headerHeight}px)`}
  style:transform="translate3d({$menuX}%,0,0)"
  style:top={headerHeight + "px"}
>
  <nav class="contents">
    <ul class="flex flex-col text-xs">
      {#each sections as section (section.id)}
        <li class="contents">
          <a href={section.link} class="the-white-button border-b px-8 py-3">
            {section.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
