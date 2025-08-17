<script lang="ts">
  import Marquee from "$lib/components/Marquee.svelte";
  import * as Card from "$lib/components/ui/card";
  import { personalInfo } from "$lib/data/personal";
  import { cn } from "$lib/utils/shadcn";
  import dedent from "dedent";

  const PAGE_TITLE = "About Nurliman Diara Aria | Full-Stack Developer & DevOps Engineer";
  const PAGE_DESCRIPTION =
    "Experienced full-stack developer with 4+ years building scalable web applications. Expert in JavaScript/TypeScript, cloud infrastructure, and modern development practices.";
  const PAGE_KEYWORDS =
    "about developer, full-stack engineer, JavaScript expert, TypeScript developer, cloud engineer, DevOps specialist, web developer profile, software engineer background";
  const PAGE_IMAGE_ALT = "About Nurliman Diara Aria - Full-Stack Developer Profile";
  const PAGE_AUTHOR = "Nurliman Diara Aria";

  const thingsIDo = [
    {
      title: "Front-End Development",
      description: dedent`I craft high-performance user interfaces using modern JavaScript/TypeScript,
        ensuring cross-browser compatibility and responsive design across all platforms.`,
      icon: "/assets/whatido-frontend.svg",
    },
    {
      title: "Back-End Development",
      description: dedent`I build maintainable, testable web backends with performance-focused architecture,
        using various languages and frameworks to create robust server-side solutions.`,
      icon: "/assets/whatido-backend.svg",
    },
    {
      title: "Cloud Development",
      description: dedent`I design and manage cloud infrastructure including Kubernetes clusters, virtual machines,
        databases, storage, networking, and load balancers on Google Cloud Platform.`,
      icon: "/assets/whatido-cloud.svg",
    },
    {
      title: "Graphic Design",
      description: dedent`I create user flows, wireframes, prototypes, and mockups with a focus on user experience.
        My expertise includes developing style guides, design systems, and intuitive interfaces.`,
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

<svelte:head>
  <title>{PAGE_TITLE}</title>
  <meta name="description" content={PAGE_DESCRIPTION} />
  <meta name="keywords" content={PAGE_KEYWORDS} />
  <meta property="og:title" content={PAGE_TITLE} />
  <meta property="og:description" content={PAGE_DESCRIPTION} />
  <meta property="og:type" content="profile" />
  <meta property="profile:first_name" content="Nurliman" />
  <meta property="profile:last_name" content="Diara Aria" />
  <meta property="profile:username" content="nurliman" />
  <meta property="profile:gender" content="male" />
  <meta property="og:image:alt" content={PAGE_IMAGE_ALT} />
  <meta name="twitter:title" content={PAGE_TITLE} />
  <meta name="twitter:description" content={PAGE_DESCRIPTION} />
  <meta name="twitter:image:alt" content={PAGE_IMAGE_ALT} />
  <meta property="og:article:author" content={PAGE_AUTHOR} />
</svelte:head>

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
        Crafting Digital Solutions with Modern Technologies.
      </span>
    </h1>

    <div class="mb-4 md:mb-6"></div>

    <p class="max-md:text-sm">
      I'm a JavaScript/TypeScript developer with over 4 years of experience building web
      applications. My expertise spans frontend, backend, and DevOps technologies. I'm currently
      seeking opportunities as a programmer at technology companies where I can contribute to
      innovative projects. I excel at designing, coding, testing, and implementing custom solutions
      that exceed expectations, and I'm always eager to learn new technologies.
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
