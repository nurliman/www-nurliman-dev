<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { sections } from "$lib/data/sections";

  const dispatch = createEventDispatcher<{
    change: { isOpen: boolean };
  }>();

  export let isOpen: boolean;
  export let backdropOpacity: number;
  export let headerHeight: number;
  export let modalX: number;
</script>

<button
  type="button"
  class="fixed inset-0 z-10 bg-black opacity-0 md:hidden"
  class:pointer-events-auto={isOpen}
  class:pointer-events-none={!isOpen}
  style:opacity={backdropOpacity}
  on:click={() => dispatch("change", { isOpen: !isOpen })}
/>

<div
  class="absolute z-40 w-screen border-r bg-white shadow sm:max-w-xs md:hidden"
  style:height={`calc(100vh - ${headerHeight}px)`}
  style:transform="translate3d({modalX}%,0,0)"
  style:top={headerHeight + "px"}
>
  <nav class="contents">
    <ul class="flex flex-col text-xs uppercase">
      {#each sections as section (section.id)}
        <li class="contents">
          <a
            href={section.link}
            class="the-white-button border-b px-8 py-3 hover:font-semibold"
            on:click={() => dispatch("change", { isOpen: false })}
          >
            {section.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>
