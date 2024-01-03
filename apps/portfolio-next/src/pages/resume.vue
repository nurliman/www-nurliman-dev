<script setup lang="ts">
import { readonly } from "vue";
import { me } from "~/data/me";
import TheBadge from "~/components/TheBadge.vue";
import TheResumeTimeline, { type TimelineItem } from "~/components/TheResumeTimeline.vue";
import TheResumeSkills from "~/components/TheResumeSkills.vue";

const experiencesTimeline = readonly<TimelineItem[]>(
  me.experiences.map((exp) => ({
    period: exp.period,
    institution: exp.company,
    title: exp.title,
    description: exp.description,
  })),
);

const educationsTimeline = readonly<TimelineItem[]>(
  me.educations.map((edu) => ({
    period: edu.period,
    institution: edu.school,
    title: edu.field,
    description: edu.description,
  })),
);
</script>

<template>
  <div class="relative mx-auto flex w-full max-w-[90rem] flex-col">
    <div class="mx-auto flex w-full max-w-xl flex-col px-4 sm:px-6 lg:mx-0 lg:px-8">
      <div class="mb-8" />
      <h1 class="font-transducer-extended text-3xl font-semibold md:text-4xl lg:text-5xl">
        Resume
      </h1>
      <div class="mb-8" />
      <h2 class="font-transducer-extended text-xl font-bold">Experiences:</h2>
      <div class="mb-5" />
      <div>
        <TheResumeTimeline :data="experiencesTimeline" />
      </div>
      <div class="mb-8" />
      <h2 class="font-transducer-extended text-xl font-bold">Educations:</h2>
      <div class="mb-5" />
      <div>
        <TheResumeTimeline :data="educationsTimeline" />
      </div>
      <div class="mb-8" />
      <h2 class="font-transducer-extended text-xl font-bold">Technical Skills:</h2>
      <div class="mb-5" />
      <div>
        <TheResumeSkills :data="me.technicalSkills" />
      </div>
      <div class="mb-8" />
      <h2 class="font-transducer-extended text-xl font-bold">Other Skills:</h2>
      <div class="mb-5" />
      <div>
        <TheResumeSkills :data="me.otherSkills" />
      </div>
      <div class="mb-8" />
      <h2 class="font-transducer-extended text-xl font-bold">Knowledges:</h2>
      <div class="mb-5" />
      <div>
        <ul>
          <TheBadge
            v-for="item in me.knowledges"
            :key="item"
            class="mx-0.5 my-1 inline-block px-2.5 py-0.5 text-xs"
            color="teal"
            component="li"
            shadow="sm"
          >
            {{ item }}
          </TheBadge>
        </ul>
      </div>
      <div class="mb-10" />
      <h2 class="font-transducer-extended text-xl font-bold">Certifications:</h2>
      <div class="mb-5" />
      <div>
        <ul class="flex flex-col space-y-4">
          <li
            v-for="cert in me.certificates"
            :key="cert.name + (cert.credential || cert.date)"
            class="flex min-h-28 flex-row overflow-hidden rounded-md border-2"
          >
            <div class="flex-center min-w-28 border-r-2 bg-zinc-100 dark:bg-zinc-800">
              <img
                :src="cert.organization.logoUrl"
                :alt="cert.organization.name + ' logo'"
                loading="lazy"
                class="h-10 w-10 dark:hidden"
              />
              <img
                :src="cert.organization.logoDarkUrl"
                :alt="cert.organization.name + ' logo'"
                loading="lazy"
                class="hidden h-10 w-10 dark:block"
              />
            </div>
            <div class="flex flex-col space-y-2 p-5">
              <div class="font-transducer-extended text-sm font-semibold">{{ cert.name }}</div>
              <div
                v-if="!!cert.credential"
                class="text-xs font-medium text-zinc-700 dark:text-zinc-400"
              >
                Credential ID: {{ cert.credential.id }}
              </div>
              <div v-if="!!cert.date" class="text-xs text-zinc-700 dark:text-zinc-400">
                {{ cert.date }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="mb-14" />
    </div>
  </div>
</template>
