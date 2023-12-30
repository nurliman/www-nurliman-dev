<script setup lang="ts">
import NuxtLink from "#app/components/nuxt-link";
import TheBadge from "~/components/TheBadge.vue";
import TheButton from "~/components/TheButton.vue";
</script>

<template>
  <div class="flex-center relative -top-4 flex-1 flex-col p-4 text-center">
    <h1 class="font-transducer-extended">
      <TheBadge
        component="span"
        color="zinc"
        border="sm"
        shadow="sm"
        rounded
        :class="[
          'mb-5 inline-flex md:mb-6',
          'px-2.5 py-px md:px-3.5 md:py-0.5',
          'text-sm md:text-base',
          'md:brutal-shadow md:border-2',
        ]"
      >
        <span>Nurliman Diara</span>
        <span class="absolute text-transparent">:</span>
      </TheBadge>
      <br />
      <span :class="$style.hero">Crafting Digital</span>
      <br />
      <span :class="$style.hero">Experiences</span>
    </h1>
    <div class="h-5 md:h-8" />
    <p class="text-sm sm:text-xl">
      <span>Simple Solutions with a Significant Purpose,</span>
      <br class="hidden sm:block" />
      <span>Navigating the Landscape of Digital Development.</span>
    </p>
    <div class="h-8 md:h-10" />
    <div class="flex flex-row items-center space-x-4 md:space-x-6">
      <TheButton
        :component="NuxtLink"
        :class="$style.btn"
        border
        shadow
        color="teal"
        to="/about-me"
      >
        Explore
      </TheButton>
      <TheButton :component="NuxtLink" border shadow to="/contact" :class="$style.btn">
        Contact
      </TheButton>
      <button type="button"></button>
    </div>
  </div>
</template>

<style module>
.btn {
  @apply p-2 md:p-2.5 lg:p-3;
  @apply text-sm md:text-base;
  @apply min-w-[8rem] md:min-w-[12rem];
}

.hero {
  @apply font-semibold;
  @apply text-3xl sm:text-5xl md:text-6xl lg:text-8xl;
}
</style>
