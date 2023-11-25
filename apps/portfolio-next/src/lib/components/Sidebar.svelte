<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { sections } from "$lib/data/sections";
  import { socials } from "$lib/data/socials";

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
  class="absolute z-40 flex w-screen flex-col border-r bg-white shadow sm:max-w-xs md:hidden"
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
  <div class="h-px w-px flex-1" />
  <div class="flex bg-white p-5 border-t">
    <ul class="flex flex-row space-x-3.5">
      {#each socials as social (social.link)}
        <li class="flex">
          <a href={social.link} target="_blank" class="p-1.5 hover:bg-zinc-200 border rounded">
            <img src={social.iconUrl} alt={social.name} class="h-[18px] w-[18px]" />
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
