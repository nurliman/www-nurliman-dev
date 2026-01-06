<script lang="ts">
  import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
  import HouseIcon from "@lucide/svelte/icons/house";
  import { browser } from "$app/environment";
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import NeobrutalismBadge from "$lib/components/NeobrutalismBadge.svelte";
  import NeobrutalismButton from "$lib/components/NeobrutalismButton.svelte";
  import { cn } from "$lib/utils/shadcn";

  let illustrationLoaded = $state(false);

  // Error configuration based on status code
  const errorConfig = {
    404: {
      title: "Page Not Found",
      subtitle: "Looks like you've wandered into the void",
      description: "The page you're looking for doesn't exist or has been moved.",
      illustration: "/assets/undraw_under-construction_c2y1.svg",
      illustrationAlt: "Construction workers building house framework",
    },
    default: {
      title: "Something Went Wrong",
      subtitle: "An unexpected error occurred",
      description: "We encountered an error while processing your request.",
      illustration: "/assets/undraw_bug-fixing_sgk7.svg",
      illustrationAlt: "Developer troubleshooting and fixing technical issues",
    },
  };

  const config = $derived(
    errorConfig[page.status as keyof typeof errorConfig] || errorConfig.default,
  );

  const goBack = () => {
    if (browser && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };
</script>

<main class="flex-center relative flex-1 flex-col overflow-hidden px-4 pt-16 pb-24 text-center">
  <!-- Error badge with status code -->
  <div class="relative z-10 mx-auto max-w-2xl space-y-8">
    <div>
      <NeobrutalismBadge
        class={cn(
          "inline-flex rounded-full",
          "px-3 py-1 md:px-4 md:py-1.5",
          "text-sm font-semibold md:text-base",
          "shadow-neobrutalism-sm md:shadow-neobrutalism",
        )}
        variant="zinc"
      >
        Error {page.status}
      </NeobrutalismBadge>
    </div>

    <!-- Main illustration -->
    <div>
      <div class="relative mx-auto flex justify-center">
        <img
          src={config.illustration}
          alt={config.illustrationAlt}
          class={cn(
            "h-full max-h-72 w-auto object-contain md:max-h-90",
            !illustrationLoaded && "sm:h-72 md:h-90",
          )}
          loading="eager"
          onload={() => {
            illustrationLoaded = true;
          }}
        />
      </div>
    </div>

    <!-- Error content -->
    <div class="space-y-4">
      <h1
        class={cn(
          "font-transducer-extended font-bold",
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
          "from-foreground to-foreground bg-gradient-to-r via-teal-600",
          "bg-clip-text text-transparent",
        )}
      >
        {config.title}
      </h1>

      <p class="text-muted-foreground mx-auto text-sm leading-relaxed sm:text-base">
        {config.description}
      </p>
    </div>

    <!-- Action buttons -->
    <div class="flex-center flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <NeobrutalismButton
        class="h-11 min-w-40 text-base font-semibold md:min-w-48"
        href={resolve("/")}
        variant="default"
      >
        <HouseIcon class="mr-2 size-8" strokeWidth={2.5} />
        <span>Go Home</span>
      </NeobrutalismButton>

      <NeobrutalismButton
        class="h-11 min-w-40 text-base font-semibold md:min-w-48"
        variant="neutral"
        onclick={goBack}
      >
        <ArrowLeftIcon class="mr-2 size-8" strokeWidth={2.5} />
        <span>Go Back</span>
      </NeobrutalismButton>
    </div>
  </div>
</main>
