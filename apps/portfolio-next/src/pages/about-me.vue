<script setup lang="ts">
import { readonly } from "vue";
import { Vue3Marquee } from "vue3-marquee";

const thingsIDo = readonly([
  {
    title: "Front-End Development",
    description:
      "I utilize modern JavaScript/TypeScript to craft high-performance User Interfaces that are optimized for cross-browser and multi-platform compatibility.",
    icon: "/assets/whatido-frontend.svg",
  },
  {
    title: "Back-End Development",
    description:
      "My focus is on writing maintainable, testable, and efficient Web Backends using various languages and frameworks, always keeping performance in mind.",
    icon: "/assets/whatido-backend.svg",
  },
  {
    title: "Cloud Development",
    description:
      "I specialize in building and managing Kubernetes, VMs, Cloud Databases, Cloud Computing, Cloud Storage, Cloud Network, Load Balancers, and more, leveraging the capabilities of the Google Cloud Platform.",
    icon: "/assets/whatido-cloud.svg",
  },
  {
    title: "Graphic Design",
    description:
      "I excel in creating user flows, wireframes, prototypes, and mockups. My ability to translate requirements into style guides, design systems, design patterns, and aesthetically pleasing user interfaces sets me apart.",
    icon: "/assets/whatido-design.svg",
  },
]);

const info = readonly([
  ["Age", "25"],
  ["Residence", "Indonesia"],
  ["Address", "Ujungberung, Bandung"],
  ["e-mail", "nurlimandiara@gmail.com"],
  ["Phone", "+62 821-3325-8511"],
]);
</script>

<template>
  <div class="flex w-full flex-col text-left">
    <client-only>
      <div class="relative border-b-2 bg-zinc-200 py-1 md:-top-[2px]">
        <Vue3Marquee clone>
          <div class="font-transducer-extended inline-flex text-[10px] font-bold">
            <span>NURLIMAN DIARA ARIA</span>
            <span class="mx-2.5">&#8226;</span>
          </div>
        </Vue3Marquee>
      </div>
    </client-only>

    <div class="mb-6" />

    <div :class="$style.container">
      <h1 :class="$style.heading1">
        <span :class="$style.aboutMe">
          <span>About Me</span>
          <span class="absolute text-transparent">:</span>
        </span>
        <br />
        <span>Years of Mastery in JavaScript/TypeScript.</span>
      </h1>

      <div class="mb-4 md:mb-6" />

      <p class="md:text-lg">
        I am a proficient Javascript/Typescript programmer with over 4 years of experience as a Web
        Developer. My expertise extends across Backend, Frontend, and DevOps technologies.
        Currently, I am actively seeking employment as a Programmer at any technology-based company.
        My skill set includes exceptional abilities in designing, coding, testing, and implementing
        customizations to surpass customer expectations. Additionally, I possess a strong eagerness
        to acquire new skills.
      </p>
    </div>

    <div class="mb-12" />

    <div class="flex flex-col" :class="$style.container">
      <h2 class="font-transducer-extended text-xl font-bold">What I Do:</h2>
    </div>
    <div class="mb-4" />

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2" :class="$style.container">
      <div v-for="thing in thingsIDo" :key="thing.title" :class="$style.card">
        <NuxtImg :src="thing.icon" :alt="thing.title" width="84px" height="84px" loading="lazy" />
        <div class="mb-4" />
        <h3 :class="$style.heading3">{{ thing.title }}</h3>
        <div class="mb-1.5" />
        <p class="text-sm lg:text-base">
          {{ thing.description }}
        </p>
      </div>
    </div>

    <div class="mb-14" />

    <client-only>
      <div class="border-y-2 bg-zinc-200 py-2">
        <Vue3Marquee clone>
          <ul class="flex text-xs">
            <li v-for="([key, value], index) in info" :key="key + value">
              <span>{{ key }}&nbsp;</span>
              <span class="font-bold">{{ value }}</span>
              <span v-if="index < info.length - 1">&nbsp;|&nbsp;</span>
            </li>
            <li class="mx-4">&#8226;</li>
          </ul>
        </Vue3Marquee>
      </div>
    </client-only>
  </div>
</template>

<style module>
.container {
  @apply mx-auto w-full max-w-[90rem];
  @apply px-4 sm:px-6 lg:px-8;
}

.heading1 {
  @apply font-transducer-extended font-semibold;
  @apply text-xl sm:text-3xl md:text-4xl lg:text-5xl;
}

.aboutMe {
  @apply relative inline-flex;
  @apply mb-2 md:mb-4;
  @apply text-sm font-medium md:text-lg;
}

.heading3 {
  @apply font-transducer-extended font-semibold;
}

.card {
  @apply flex flex-1 flex-col items-center rounded-lg border-2 p-8 text-center;
  @apply -translate-x-1 -translate-y-1;
  @apply brutal-shadow-sm;
}
</style>
