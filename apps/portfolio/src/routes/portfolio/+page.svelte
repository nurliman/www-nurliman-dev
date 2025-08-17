<script lang="ts">
  import NeobrutalismButton from "$lib/components/NeobrutalismButton.svelte";
  import * as Card from "$lib/components/ui/card";
  import { projects } from "$lib/data/projects";
  import ProjectCard from "./ProjectCard.svelte";

  const PAGE_TITLE = "Portfolio | Nurliman Diara Aria - Full-Stack Developer";
  const PAGE_DESCRIPTION =
    "Showcase of innovative web applications, cloud solutions, and full-stack projects. See how modern technologies solve real-world problems.";
  const PAGE_KEYWORDS =
    "developer portfolio, web application projects, full-stack case studies, cloud solutions, React projects, Node.js applications, software development showcase";
  const PAGE_IMAGE_ALT = "Portfolio - Nurliman Diara Aria's Development Projects";
  const PAGE_AUTHOR = "Nurliman Diara Aria";
</script>

<svelte:head>
  <title>{PAGE_TITLE}</title>
  <meta name="description" content={PAGE_DESCRIPTION} />
  <meta name="keywords" content={PAGE_KEYWORDS} />
  <meta property="og:title" content={PAGE_TITLE} />
  <meta property="og:description" content={PAGE_DESCRIPTION} />
  <meta property="og:image:alt" content={PAGE_IMAGE_ALT} />
  <meta name="twitter:title" content={PAGE_TITLE} />
  <meta name="twitter:description" content={PAGE_DESCRIPTION} />
  <meta name="twitter:image:alt" content={PAGE_IMAGE_ALT} />
  <meta property="og:article:author" content={PAGE_AUTHOR} />
</svelte:head>

<main class="w-full pt-16 pb-24">
  <div class="container mx-auto w-full max-sm:px-6">
    <!-- Header -->
    <div class="mb-12 text-center sm:mb-16">
      <h1
        class={[
          "font-transducer-extended font-black tracking-tight",
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
          "mb-4",
        ]}
      >
        FEATURED PROJECTS
      </h1>
      <div class="mx-auto h-2 w-16 bg-teal-500 sm:w-24"></div>
    </div>

    <!-- Projects List -->
    <div class="space-y-8 md:space-y-12 lg:space-y-16">
      {#if projects.length}
        {#each projects as project (project.id)}
          <ProjectCard {project} />
        {/each}
      {:else}
        <Card.Root
          class={[
            "!shadow-neobrutalism rounded-none border-4 border-black",
            "py-12 sm:py-16 lg:py-20",
            "dark:border-zinc-800",
          ]}
        >
          <Card.Content
            class={[
              "grid grid-cols-1 items-center gap-8 px-4",
              "sm:grid-cols-[280px,1fr] sm:gap-12 md:px-8",
              "lg:grid-cols-[360px,1fr] lg:gap-16",
            ]}
          >
            <div class="order-2 text-center sm:order-1">
              <h2
                class={[
                  "font-transducer-extended font-black tracking-tight",
                  "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
                  "mb-4",
                ]}
              >
                NO PROJECTS PUBLISHED
              </h2>
              <p
                class={[
                  "mx-auto max-w-prose font-medium",
                  "text-sm text-gray-700 sm:text-base lg:text-lg",
                  "dark:text-gray-300",
                ]}
              >
                I'm currently curating featured case studies to showcase my best work. In the
                meantime, explore my experience or reach out to discuss your project needs.
              </p>
            </div>

            <div class="order-1 sm:order-2">
              <img
                src="/assets/undraw_under-construction_c2y1.svg"
                alt="Projects are being curated"
                class={[
                  "mx-auto w-full",
                  "h-32 sm:h-48 lg:h-64",
                  "max-w-xs sm:max-w-[280px] lg:max-w-[360px]",
                ]}
                loading="lazy"
              />
            </div>
          </Card.Content>
        </Card.Root>
      {/if}
    </div>

    <!-- Call to Action -->
    <Card.Root
      class={[
        "mt-8 py-6 sm:py-8 md:mt-16 lg:py-12",
        "rounded-none border-4 border-black dark:border-zinc-800",
        "!shadow-neobrutalism",
      ]}
    >
      <Card.Header class="px-4 sm:px-6 md:px-8">
        <Card.Title
          class="font-transducer-extended text-center text-xl font-black sm:text-2xl md:text-3xl"
        >
          READY TO COLLABORATE?
        </Card.Title>
      </Card.Header>
      <Card.Content class="px-4 sm:px-6 md:px-8">
        <p
          class={[
            "text-center font-medium",
            "text-sm text-gray-700 sm:text-base md:text-lg",
            "dark:text-gray-300",
          ]}
        >
          Let's discuss how I can help build your next project.
        </p>
      </Card.Content>
      <Card.Footer
        class={[
          "flex flex-col space-y-3 px-4",
          "sm:flex-row sm:space-y-0 sm:space-x-4 sm:px-6",
          "md:px-8 lg:self-center",
        ]}
      >
        <NeobrutalismButton
          class="w-full py-3 text-sm font-black sm:py-4 sm:text-base md:h-11 lg:min-w-52"
          href="/contact"
        >
          REACH OUT
        </NeobrutalismButton>
        <NeobrutalismButton
          class="w-full py-3 text-sm font-black sm:py-4 sm:text-base md:h-11 lg:min-w-52"
          href="/resume"
          variant="neutral"
        >
          SEE MY EXPERIENCE
        </NeobrutalismButton>
      </Card.Footer>
    </Card.Root>
  </div>
</main>
