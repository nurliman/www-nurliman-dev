<script lang="ts">
  import NeobrutalismBadge from "$lib/components/NeobrutalismBadge.svelte";
  import { me } from "$lib/data/me";
  import { cn } from "$lib/utils/shadcn";
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
</script>

<main class="relative container flex w-full flex-col">
  <div class="mx-auto flex w-full max-w-xl flex-col lg:mx-0">
    <div class="mb-8"></div>

    <h1 class="font-transducer-extended text-3xl font-semibold md:text-4xl lg:text-5xl">Resume</h1>
    <div class="mb-5"></div>
    <div class="text-sm">
      <span>Download my </span>
      <a
        class={cn(
          "font-semibold underline underline-offset-2",
          "transition-colors",
          "hover:text-zinc-700 dark:hover:text-zinc-400",
        )}
        href="https://drive.google.com/file/d/1QkF7VNpAJoWCLBu6mc4F7oJJtGfNHgT0/view?usp=sharing"
        target="_blank">ATS Friendly CV</a
      >.
    </div>
    <div class="mb-8"></div>

    <h2 class="font-transducer-extended text-xl font-bold">Summary:</h2>
    <div class="mb-5"></div>
    <div>
      <p class="text-sm">
        Results-oriented Software Engineer, proficient in Frontend Development, and well-versed in
        DevOps practices. Adept at crafting high-performance, user-centric applications with a keen
        eye for detail. Demonstrated success in optimizing software delivery pipelines, implementing
        scalable solutions, and fostering cross-functional collaboration. Proactive problem-solver
        with a passion for staying abreast of emerging technologies. Seeking a challenging role to
        leverage technical expertise and contribute to innovative projects in a dynamic environment.
      </p>
    </div>
    <div class="mb-8"></div>

    <h2 class="font-transducer-extended text-xl font-bold">Experience:</h2>
    <div class="mb-5"></div>
    <div>
      <Timeline data={experiencesTimeline} />
    </div>
    <div class="mb-8"></div>

    <h2 class="font-transducer-extended text-xl font-bold">Education:</h2>
    <div class="mb-5"></div>
    <div>
      <Timeline data={educationsTimeline} />
    </div>
    <div class="mb-8"></div>

    <h2 class="font-transducer-extended text-xl font-bold">Technical Skills:</h2>
    <div class="mb-5"></div>
    <div>
      <Skills data={me.technicalSkills} />
    </div>
    <div class="mb-8"></div>

    <h2 class="font-transducer-extended text-xl font-bold">Other Skills:</h2>
    <div class="mb-5"></div>
    <div>
      <Skills data={me.otherSkills} />
    </div>
    <div class="mb-8"></div>

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

    <h2 class="font-transducer-extended text-xl font-bold">Certifications:</h2>
    <div class="mb-5"></div>
    <div>
      <ul class="flex flex-col space-y-4">
        {#each me.certificates as cert (cert.name + cert.date + cert.credential?.id)}
          <li class="flex min-h-28 flex-row overflow-hidden rounded-md border-2">
            <div
              class={cn(
                "flex-center min-w-28",
                "border-r-2 bg-zinc-100",
                "dark:border-zinc-800 dark:bg-zinc-800",
              )}
            >
              <img
                src={cert.organization.logoUrl}
                alt={cert.organization.name + " logo"}
                loading="lazy"
                class="h-10 w-10 dark:hidden"
              />
              <img
                src={cert.organization.logoDarkUrl}
                alt={cert.organization.name + " logo"}
                loading="lazy"
                class="hidden h-10 w-10 dark:block"
              />
            </div>
            <div class="flex w-full flex-col space-y-2 overflow-hidden p-5">
              <div class="font-transducer-extended text-sm font-semibold">
                {cert.name}
              </div>
              {#if cert.credential}
                <div class="text-xs font-medium text-zinc-700 dark:text-zinc-400">
                  {"Credential: "}
                  <a
                    href={cert.credential.url}
                    target="_blank"
                    class={cn(
                      "underline underline-offset-2",
                      "transition-colors",
                      "hover:text-black dark:hover:text-zinc-100",
                    )}
                  >
                    {cert.credential.id}
                  </a>
                </div>
              {/if}
              {#if cert.date}
                <div class="text-xs text-zinc-700 dark:text-zinc-400">{cert.date}</div>
              {/if}
            </div>
          </li>
        {/each}
      </ul>
    </div>
    <div class="mb-14 md:mb-20"></div>
  </div>
</main>
