<script lang="ts">
  import NeobrutalismBadge from "$lib/components/NeobrutalismBadge.svelte";
  import NeobrutalismButton from "$lib/components/NeobrutalismButton.svelte";
  import { personalInfo } from "$lib/data/personal";
  import { cn } from "$lib/utils/shadcn";
</script>

<main class="flex-center relative -top-4 flex-1 flex-col p-4 text-center">
  <h1 class="font-transducer-extended">
    <NeobrutalismBadge
      class={cn(
        "mb-5 inline-flex rounded-full md:mb-6",
        "px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1 lg:px-4 lg:py-1",
        "text-xs sm:text-xs md:text-sm lg:text-base",
        "shadow-neobrutalism-sm md:shadow-neobrutalism",
      )}
      shadow="none"
      variant="zinc"
    >
      <span>{personalInfo.name}</span>
      <span class="absolute text-transparent">:</span>
    </NeobrutalismBadge>

    <br />
    <span class="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-8xl">Crafting Digital</span>
    <br />
    <span class="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-8xl">Experiences</span>
  </h1>

  <div class="h-5 md:h-8"></div>

  <p class="text-sm sm:text-xl">
    <span>Simple Solutions with a Significant Purpose,</span>
    <br class="hidden sm:block" />
    <span>Navigating the Landscape of Digital Development.</span>
  </p>

  <div class="h-8 md:h-10"></div>

  <div class="flex-center flex-row space-x-4 md:space-x-6">
    <NeobrutalismButton
      class="min-w-32 md:h-10 md:min-w-48 md:px-6 md:text-base lg:h-11"
      href="/about-me">Explore</NeobrutalismButton
    >
    <NeobrutalismButton
      class="min-w-32 md:h-10 md:min-w-48 md:px-6 md:text-base lg:h-11"
      href="/contact"
      variant="neutral">Contact</NeobrutalismButton
    >
  </div>
</main>
