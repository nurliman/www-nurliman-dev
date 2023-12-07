<script setup lang="ts">
import NuxtLink from "#app/components/nuxt-link";
import TheButton from "~/components/TheButton";
</script>

<template>
  <div :class="$style.container">
    <h1 class="font-transducer-extended">
      <span :class="$style.headingName">
        <span>Nurliman Diara</span>
        <span class="absolute text-transparent">:</span>
      </span>
      <br />
      <span :class="$style.headingText">Crafting Digital</span>
      <br />
      <span :class="$style.headingText">Experiences</span>
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
  @apply transition-all !important;
}

.container {
  @apply p-4;
  @apply flex-center flex-1 flex-col;
  @apply relative -top-4;
  @apply text-center;
}

.headingName {
  @apply mb-5 inline-flex md:mb-6;
  @apply px-2.5 py-px md:px-3.5 md:py-0.5;
  @apply text-sm md:text-base;
  @apply rounded-full border bg-zinc-200 md:border-2;
  @apply brutal-shadow-sm md:brutal-shadow;
}

.headingText {
  @apply font-semibold;
  @apply text-3xl sm:text-5xl md:text-6xl lg:text-8xl;
}
</style>
