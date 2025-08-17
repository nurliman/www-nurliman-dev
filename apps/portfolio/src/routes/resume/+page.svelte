<script lang="ts">
  import DownloadIcon from "@lucide/svelte/icons/download";
  import NeobrutalismBadge from "$lib/components/NeobrutalismBadge.svelte";
  import NeobrutalismButton from "$lib/components/NeobrutalismButton.svelte";
  import TableOfContents from "$lib/components/TableOfContents.svelte";
  import { HEADER_HEIGHT } from "$lib/constants";
  import { certificates } from "$lib/data/certificates";
  import { education } from "$lib/data/education";
  import { experiences } from "$lib/data/experiences";
  import { knowledge } from "$lib/data/knowledge";
  import { otherSkills, technicalSkills } from "$lib/data/skills";
  import { IsLarge } from "$lib/hooks/is-large.svelte";
  import Certificates from "./Certificates.svelte";
  import Skills from "./Skills.svelte";
  import Timeline from "./Timeline.svelte";
  import type { TimelineItem } from "./types";

  const PAGE_TITLE = "Resume & Experience | Nurliman Diara Aria - Full-Stack Developer";
  const PAGE_DESCRIPTION =
    "Comprehensive resume showcasing 4+ years of full-stack development experience, technical skills, and professional achievements. Download available.";
  const PAGE_KEYWORDS =
    "software engineer resume, full-stack developer CV, technical skills, professional experience, software development portfolio, developer resume download";
  const PAGE_IMAGE_ALT = "Resume & Experience - Nurliman Diara Aria";
  const PAGE_AUTHOR = "Nurliman Diara Aria";

  const experiencesTimeline: TimelineItem[] = experiences.map((exp) => ({
    period: exp.period,
    institution: exp.company,
    title: exp.title,
    description: exp.description,
  }));

  const educationsTimeline: TimelineItem[] = education.map((edu) => ({
    period: edu.period,
    institution: edu.school,
    title: edu.field,
    description: edu.description,
  }));

  const tocSections = [
    { id: "summary", title: "Summary" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" },
    { id: "technical-skills", title: "Technical Skills" },
    { id: "other-skills", title: "Other Skills" },
    { id: "knowledges", title: "Knowledges" },
    { id: "certifications", title: "Certifications" },
  ];

  const isLarge = new IsLarge();
</script>

<svelte:head>
  <title>{PAGE_TITLE}</title>
  <meta name="description" content={PAGE_DESCRIPTION} />
  <meta name="keywords" content={PAGE_KEYWORDS} />
  <meta property="og:title" content={PAGE_TITLE} />
  <meta property="og:description" content={PAGE_DESCRIPTION} />
  <meta property="og:type" content="profile" />
  <meta property="og:image:alt" content={PAGE_IMAGE_ALT} />
  <meta name="twitter:title" content={PAGE_TITLE} />
  <meta name="twitter:description" content={PAGE_DESCRIPTION} />
  <meta name="twitter:image:alt" content={PAGE_IMAGE_ALT} />
  <meta property="og:article:author" content={PAGE_AUTHOR} />
</svelte:head>

<main class="relative container flex w-full flex-col">
  <div class="mt-16 mb-24 flex w-full justify-between">
    <!-- Main Content -->
    <div class="mx-auto flex w-full max-w-xl flex-col lg:mx-0 lg:max-w-full lg:flex-1">
      <h1 class="font-transducer-extended text-3xl font-semibold md:text-4xl lg:text-5xl">
        Resume
      </h1>
      <div class="mb-5"></div>

      <!-- Updated CV Download Section -->
      <div
        class={[
          "mb-8 flex flex-col space-y-4",
          "md:flex-row md:items-center md:space-y-0 md:space-x-4",
        ]}
      >
        <p class="text-muted-foreground text-sm">
          Download my resume for a detailed summary of my experience.
        </p>
        <NeobrutalismButton
          variant="zinc"
          size="sm"
          shadow="sm"
          href="https://drive.google.com/file/d/1QkF7VNpAJoWCLBu6mc4F7oJJtGfNHgT0/view?usp=sharing"
          target="_blank"
          class="w-fit"
        >
          <DownloadIcon class="mr-2 size-4 stroke-[2.5]" />
          Download Resume (PDF)
        </NeobrutalismButton>
      </div>

      <section id="summary" class="scroll-mt-20">
        <h2 class="font-transducer-extended text-xl font-bold">Summary:</h2>
        <div class="mb-5"></div>
        <div>
          <p class="text-sm md:leading-relaxed">
            Results-driven software engineer with expertise in frontend development and DevOps
            practices. I specialize in creating high-performance, user-centric applications with
            meticulous attention to detail. My track record includes optimizing software delivery
            pipelines, implementing scalable solutions, and fostering cross-functional
            collaboration. I'm a proactive problem-solver who stays current with emerging
            technologies and seeks challenging opportunities to leverage technical expertise in
            innovative projects.
          </p>
        </div>
        <div class="mb-8"></div>
      </section>

      <section id="experience" class="scroll-mt-20">
        <h2 class="font-transducer-extended text-xl font-bold">Experience:</h2>
        <div class="mb-5"></div>
        <div>
          <Timeline data={experiencesTimeline} />
        </div>
        <div class="mb-8"></div>
      </section>

      <section id="education" class="scroll-mt-20">
        <h2 class="font-transducer-extended text-xl font-bold">Education:</h2>
        <div class="mb-5"></div>
        <div>
          <Timeline data={educationsTimeline} />
        </div>
        <div class="mb-8"></div>
      </section>

      <section id="technical-skills" class="scroll-mt-20">
        <h2 class="font-transducer-extended text-xl font-bold">Technical Skills:</h2>
        <div class="mb-5"></div>
        <div>
          <Skills data={technicalSkills} />
        </div>
        <div class="mb-8"></div>
      </section>

      <section id="other-skills" class="scroll-mt-20">
        <h2 class="font-transducer-extended text-xl font-bold">Other Skills:</h2>
        <div class="mb-5"></div>
        <div>
          <Skills data={otherSkills} />
        </div>
        <div class="mb-8"></div>
      </section>

      <section id="knowledges" class="scroll-mt-20">
        <h2 class="font-transducer-extended text-xl font-bold">Knowledges:</h2>
        <div class="mb-5"></div>
        <div>
          <ul class="flex flex-wrap gap-2">
            {#each knowledge as item (item)}
              <li class="contents">
                <NeobrutalismBadge class="rounded" shadow="sm">
                  {item}
                </NeobrutalismBadge>
              </li>
            {/each}
          </ul>
        </div>
        <div class="mb-10"></div>
      </section>

      <section id="certifications" class="scroll-mt-20">
        <h2 class="font-transducer-extended text-xl font-bold">Certifications:</h2>
        <div class="mb-5"></div>
        <div>
          <Certificates data={certificates} />
        </div>
      </section>
    </div>

    <!-- spacer -->
    <div class="hidden h-0 w-12 lg:block xl:w-20"></div>

    <!-- Table of Contents Sidebar -->
    <div class="hidden lg:block lg:w-84 lg:shrink-0 xl:w-96">
      {#if isLarge.current}
        <!-- 
          The value '2' is added for the header border.
          The value '32' is added for padding (could be top or bottom padding).
        -->
        <TableOfContents
          class="sticky overflow-y-auto"
          style={`
            top: ${HEADER_HEIGHT + 2 + 32}px;
            max-height: calc(100vh - ${HEADER_HEIGHT + 2 + 32 + 32}px);
          `}
          sections={tocSections}
        />
      {/if}
    </div>
  </div>
</main>
