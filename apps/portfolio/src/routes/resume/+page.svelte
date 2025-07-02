<script lang="ts">
  import DownloadIcon from "@lucide/svelte/icons/download";
  import NeobrutalismBadge from "$lib/components/NeobrutalismBadge.svelte";
  import NeobrutalismButton from "$lib/components/NeobrutalismButton.svelte";
  import TableOfContents from "$lib/components/TableOfContents.svelte";
  import { HEADER_HEIGHT } from "$lib/constants";
  import { me } from "$lib/data/me";
  import { IsLarge } from "$lib/hooks/is-large.svelte";
  import Certificates from "./Certificates.svelte";
  import Skills from "./Skills.svelte";
  import Timeline from "./Timeline.svelte";
  import type { TimelineItem } from "./types";

  const experiencesTimeline: TimelineItem[] = me.experiences.map((exp) => ({
    period: exp.period,
    institution: exp.company,
    title: exp.title,
    description: exp.description,
  }));

  const educationsTimeline: TimelineItem[] = me.educations.map((edu) => ({
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

<main class="relative container flex w-full flex-col">
  <div class="mt-8 mb-14 flex w-full justify-between md:mb-20">
    <!-- Main Content -->
    <div class="mx-auto flex w-full max-w-xl flex-col lg:mx-0 lg:max-w-full lg:flex-1">
      <h1 class="font-transducer-extended text-3xl font-semibold md:text-4xl lg:text-5xl">
        Resume
      </h1>
      <div class="mb-5"></div>

      <!-- Updated CV Download Section -->
      <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
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
            Results-oriented Software Engineer, proficient in Frontend Development, and well-versed
            in DevOps practices. Adept at crafting high-performance, user-centric applications with
            a keen eye for detail. Demonstrated success in optimizing software delivery pipelines,
            implementing scalable solutions, and fostering cross-functional collaboration. Proactive
            problem-solver with a passion for staying abreast of emerging technologies. Seeking a
            challenging role to leverage technical expertise and contribute to innovative projects
            in a dynamic environment.
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
          <Skills data={me.technicalSkills} />
        </div>
        <div class="mb-8"></div>
      </section>

      <section id="other-skills" class="scroll-mt-20">
        <h2 class="font-transducer-extended text-xl font-bold">Other Skills:</h2>
        <div class="mb-5"></div>
        <div>
          <Skills data={me.otherSkills} />
        </div>
        <div class="mb-8"></div>
      </section>

      <section id="knowledges" class="scroll-mt-20">
        <h2 class="font-transducer-extended text-xl font-bold">Knowledges:</h2>
        <div class="mb-5"></div>
        <div>
          <ul>
            {#each me.knowledges as item (item)}
              <li class="contents">
                <NeobrutalismBadge class="mx-0.5 my-1 inline-block rounded" shadow="sm">
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
          <Certificates data={me.certificates} />
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
