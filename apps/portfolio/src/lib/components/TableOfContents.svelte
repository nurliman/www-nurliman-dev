<script lang="ts">
  import MoveUpIcon from "@lucide/svelte/icons/arrow-up";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
  import MenuIcon from "@lucide/svelte/icons/menu";
  import { HEADER_HEIGHT } from "$lib/constants";
  import { activeSection, ScrollSpy } from "$lib/utils/ScrollSpy";
  import { cn } from "$lib/utils/shadcn";
  import padStart from "lodash-es/padStart";
  import { onMount } from "svelte";
  import type { SvelteHTMLElements } from "svelte/elements";
  import NeobrutalismButton from "./NeobrutalismButton.svelte";

  type TOCSection = {
    id: string;
    title: string;
    icon?: string;
  };

  type Props = SvelteHTMLElements["div"] & {
    sections: TOCSection[];
  };

  let { sections, class: className, ...props }: Props = $props();
  let currentActive = $state("");

  // Subscribe to active section changes
  onMount(() => {
    const unsubscribe = activeSection.subscribe((value) => {
      currentActive = value;
    });

    // Initialize scroll spy with custom header offset
    const scrollSpy = new ScrollSpy(
      sections.map((s) => s.id),
      {
        headerOffset: HEADER_HEIGHT + 20, // Add some extra padding
      },
    );

    return () => {
      unsubscribe();
      scrollSpy.destroy();
    };
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    const headerOffset = HEADER_HEIGHT + 20; // Add some extra padding
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo?.({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo?.({
      top: 0,
      behavior: "smooth",
    });
  };

  const getSectionNumber = (index: number): string => {
    const sectionNumber = String(index + 1);
    return padStart(sectionNumber, 2, "0");
  };
</script>

<div
  class={cn(
    "h-fit w-full p-6",
    "shadow-neobrutalism border-2 border-black",
    "bg-white dark:border-zinc-800 dark:bg-zinc-950",
    className,
  )}
  {...props}
>
  <!-- Header -->
  <div class="mb-6 flex items-center space-x-3">
    <div
      class={[
        "flex-center size-10",
        "bg-teal-500 text-white dark:bg-teal-600",
        "border-2 border-black dark:border-zinc-800",
        "shadow-neobrutalism-sm",
      ]}
    >
      <MenuIcon class="size-5 stroke-3" />
    </div>
    <div>
      <h3 class="font-transducer-extended text-sm font-bold text-black dark:text-white">
        CONTENTS
      </h3>
      <p class="text-xs font-medium text-zinc-700 dark:text-zinc-300">NAVIGATE RESUME</p>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="space-y-2">
    {#each sections as section, index (section.id)}
      {@const isActive = currentActive === section.id}

      <NeobrutalismButton
        class="group h-auto w-full cursor-pointer justify-start space-x-3 p-3 text-left"
        variant={isActive ? "default" : "neutral"}
        shadow="sm"
        onclick={() => scrollToSection(section.id)}
      >
        <!-- Section number with status -->
        <div
          class={cn(
            "flex-center size-7 text-xs font-bold",
            "border-2 border-black dark:border-zinc-800",
            "transition-all duration-200",
            "group-hover:scale-105",
            isActive
              ? "bg-white text-black"
              : "bg-zinc-200 text-black dark:bg-zinc-700 dark:text-white",
          )}
        >
          {getSectionNumber(index)}
        </div>

        <!-- Section title -->
        <div class="flex-1 text-sm font-bold tracking-wider uppercase">
          {section.title}
        </div>

        <!-- Arrow indicator -->
        <div class="opacity-0 transition-all duration-200 group-hover:opacity-100">
          <ChevronRightIcon class="size-4 stroke-[2.5]" />
        </div>
      </NeobrutalismButton>
    {/each}
  </nav>

  <!-- Scroll to top button -->
  <div class="mt-6 border-t-2 border-black pt-4 dark:border-zinc-800">
    <NeobrutalismButton
      class="w-full cursor-pointer space-x-2 py-3"
      variant="zinc"
      shadow="sm"
      onclick={scrollToTop}
    >
      <MoveUpIcon class="size-4 stroke-[2.5]" />
      <span class="text-xs font-bold tracking-wider">BACK TO TOP</span>
    </NeobrutalismButton>
  </div>
</div>
