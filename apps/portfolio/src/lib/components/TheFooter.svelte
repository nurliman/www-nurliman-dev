<script lang="ts">
  import { socials } from "$lib/data/socials";
  import { cn } from "$lib/utils/shadcn";
  import { onMount } from "svelte";

  let currentYear = $state(new Date().getFullYear());

  onMount(() => {
    currentYear = new Date().getFullYear();
  });
</script>

<footer class="bg-zinc-900 pt-10 pb-28 text-zinc-400">
  <div
    class={cn([
      "flex flex-col-reverse items-center justify-between md:flex-row",
      "container mx-auto",
      "text-sm max-md:text-center",
    ])}
  >
    <div>© {currentYear} All rights reserved.</div>
    <div class="h-6 md:h-0"></div>
    <div class="flex-center flex-row">
      {#each socials as social, index}
        <a
          href={social.link}
          class="underline underline-offset-2 hover:text-zinc-100"
          target="_blank"
          rel="noreferrer"
        >
          {social.name}
        </a>
        {#if index < socials.length - 1}
          <span>&nbsp;|&nbsp;</span>
        {/if}
      {/each}
    </div>
  </div>
</footer>
