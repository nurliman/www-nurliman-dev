<script lang="ts">
  import { clsx } from "clsx";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { sections } from "$lib/data/sections";
  import HamburgerButton from "$lib/components/HamburgerButton.svelte";
  import ThemeSwithcerButton from "$lib/components/ThemeSwithcerButton.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";

  let sidebarOpened = false;
  const sidebarModalX = tweened(-100, {
    duration: 200,
    easing: cubicOut,
  });
  const sidebarBackdropOpacity = tweened(0, {
    duration: 300,
    easing: cubicOut,
  });
  const changeMenuOpened = (isOpen?: boolean) => {
    isOpen ??= !sidebarOpened;

    if (isOpen) {
      sidebarModalX.set(0);
      sidebarBackdropOpacity.set(0.5);
      sidebarOpened = true;
    } else {
      sidebarModalX.set(-100);
      sidebarBackdropOpacity.set(0);
      sidebarOpened = false;
    }
  };
</script>

<header class="sticky top-0 z-30 overflow-hidden border-b-2 bg-white p-0">
  <div class="mx-auto flex max-w-[90rem] items-center justify-between">
    <HamburgerButton
      class="md:hidden"
      isSidebarOpen={sidebarOpened}
      on:click={() => changeMenuOpened()}
    />
    <div
      class={clsx(
        "font-racing-sans text-[1.75rem]",
        "max-md:absolute-center",
        "md:text-3xl",
        "md:px-4 md:py-2",
      )}
    >
      nurliman.
    </div>
    <div class="hidden h-7 w-px bg-zinc-600 md:flex" />
    <nav class="hidden md:contents">
      <ul class="flex flex-1 flex-row px-3 text-xs uppercase">
        {#each sections as section (section.id)}
          <li class="contents">
            <a
              href={section.link}
              class="the-white-button rounded-full px-3 py-1.5"
              on:click={() => changeMenuOpened(false)}
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

<Sidebar
  isOpen={sidebarOpened}
  backdropOpacity={$sidebarBackdropOpacity}
  modalX={$sidebarModalX}
  headerHeight={50}
  on:change={(e) => changeMenuOpened(e.detail.isOpen)}
/>
