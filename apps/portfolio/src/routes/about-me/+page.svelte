<script lang="ts">
  import Marquee from "$lib/components/Marquee.svelte";
  import * as Card from "$lib/components/ui/card";
  import { personalInfo } from "$lib/data/personal";
  import { cn } from "$lib/utils/shadcn";
  import dedent from "dedent";

  const thingsIDo = [
    {
      title: "Front-End Development",
      description: dedent`I utilize modern JavaScript/TypeScript
        to craft high-performance User Interfaces
        that are optimized for cross-browser
        and multi-platform compatibility.`,
      icon: "/assets/whatido-frontend.svg",
    },
    {
      title: "Back-End Development",
      description: dedent`My focus is on writing maintainable, testable,
        and efficient Web Backends using various languages and frameworks,
        always keeping performance in mind.`,
      icon: "/assets/whatido-backend.svg",
    },
    {
      title: "Cloud Development",
      description: dedent`I specialize in building and managing 
        Kubernetes, VMs, Cloud Databases, Cloud Computing,
        Cloud Storage, Cloud Network, Load Balancers, and more,
        leveraging the capabilities of the Google Cloud Platform.`,
      icon: "/assets/whatido-cloud.svg",
    },
    {
      title: "Graphic Design",
      description: dedent`I excel in creating user flows, wireframes, prototypes, and mockups.
        My ability to translate requirements into style guides, design systems,
        design patterns, and aesthetically pleasing user interfaces sets me apart.`,
      icon: "/assets/whatido-design.svg",
    },
  ];

  const contactInfo = [
    ["Age", personalInfo.age],
    ["Residence", personalInfo.residence],
    ["e-mail", personalInfo.email],
    ["Phone", personalInfo.phoneFormatted],
  ];

  const containerClass = "mx-auto w-full container";
</script>

<main class="flex w-full flex-col text-left">
  <div
    class={[
      "min-h-[25px] border-b-2 border-black bg-zinc-200 py-1",
      "dark:border-zinc-800 dark:bg-zinc-900",
      "md:-top-[2px]",
    ]}
  >
    <Marquee clone>
      <div class="font-transducer-extended inline-flex text-[10px] font-bold">
        <span>NURLIMAN DIARA ARIA</span>
        <span class="mx-3">&#8226;</span>
      </div>
    </Marquee>
  </div>

  <div class="mb-16"></div>

  <div class={containerClass}>
    <h1 class="font-transducer-extended">
      <span class="relative mb-2 inline-flex text-sm font-medium md:mb-4 md:text-lg">
        <span>About Me</span>
        <span class="absolute text-transparent">:</span>
      </span>
      <br />
      <span class="text-xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
        Years of Mastery in JavaScript/TypeScript.
      </span>
    </h1>

    <div class="mb-4 md:mb-6"></div>

    <p class="max-md:text-sm">
      I am a proficient Javascript/Typescript programmer with over 4 years of experience as a Web
      Developer. My expertise extends across Backend, Frontend, and DevOps technologies. Currently,
      I am actively seeking employment as a Programmer at any technology-based company. My skill set
      includes exceptional abilities in designing, coding, testing, and implementing customizations
      to surpass customer expectations. Additionally, I possess a strong eagerness to acquire new
      skills.
    </p>
  </div>

  <div class="mb-12"></div>

  <div class={cn("flex flex-col", containerClass)}>
    <h2 class="font-transducer-extended text-xl font-bold">What I Do:</h2>
  </div>

  <div class="mb-4"></div>

  <div class={cn("grid grid-cols-1 gap-8 md:grid-cols-2 ", containerClass)}>
    {#each thingsIDo as thing (thing.title)}
      <Card.Root
        class={[
          "gap-0 space-y-6",
          "rounded-none border-2 border-black dark:border-zinc-800",
          "!shadow-neobrutalism",
        ]}
      >
        <Card.Header class="flex flex-col space-y-5">
          <img
            src={thing.icon}
            alt={thing.title}
            class="bg-white"
            width="84px"
            height="84px"
            loading="lazy"
          />
          <Card.Title class="font-transducer-extended font-semibold">{thing.title}</Card.Title>
        </Card.Header>
        <Card.Content class="flex flex-col">
          <p class="text-sm md:text-[15px]">{thing.description}</p>
        </Card.Content>
      </Card.Root>
    {/each}
  </div>

  <div class="mb-24"></div>

  <div
    class={[
      "min-h-9 py-2",
      "border-y-2 border-black dark:border-zinc-800",
      "bg-zinc-200 dark:bg-zinc-950",
    ]}
  >
    <a href="/contact" class="block">
      <Marquee clone>
        <ul class="flex text-xs">
          {#each contactInfo as [key, value], index (key)}
            <li>
              <span>{key}&nbsp;</span>
              <span class="font-bold">{value}</span>
              {#if index < contactInfo.length - 1}
                <span>&nbsp;|&nbsp;</span>
              {/if}
            </li>
          {/each}
          <li class="mx-4">&#8226;</li>
        </ul>
      </Marquee>
    </a>
  </div>
</main>
