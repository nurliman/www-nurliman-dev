<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const dots = ref("...");
const timer = ref<ReturnType<typeof setInterval>>();

onMounted(() => {
  timer.value = setInterval(() => {
    if (dots.value.length >= 3) {
      dots.value = ".";
    } else {
      dots.value += ".";
    }
  }, 500);
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div class="flex-center flex-1">
    <span
      :class="[
        'font-transducer-extended font-semibold',
        'text-center text-3xl md:text-4xl lg:text-5xl',
      ]"
      >Coming soon{{ dots }}</span
    >
  </div>
</template>
