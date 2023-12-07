<script setup lang="ts">
import { ref } from "vue";
import TheButton from "~/components/TheButton";

type Theme = "light" | "dark";
const currentTheme = ref<Theme>("light");

const switchTheme = () => {
  if (currentTheme.value === "light") {
    currentTheme.value = "dark";
  } else {
    currentTheme.value = "light";
  }
};
</script>

<template>
  <TheButton class="relative mr-2 h-10 w-10 rounded-lg" @click="switchTheme">
    <img
      src="/assets/moon.svg"
      alt="Moon"
      height="24px"
      width="24px"
      loading="lazy"
      class="absolute-center transition-opacity"
      :class="{
        'opacity-0': currentTheme === 'dark',
        'opacity-100': currentTheme !== 'dark',
      }"
    />
    <img
      src="/assets/sun.svg"
      alt="Sun"
      height="27px"
      width="27px"
      loading="lazy"
      class="absolute-center transition-opacity"
      :class="{
        'opacity-0': currentTheme === 'light',
        'opacity-100': currentTheme !== 'light',
      }"
    />
  </TheButton>
</template>
