<script setup lang="ts">
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
</script>

<template>
  <TheHeader />

  <div
    :class="[
      'flex min-h-full flex-col pt-[50px] md:pt-14',
      'bg-white text-black',
      'dark:bg-black dark:text-white',
    ]"
  >
    <main class="flex flex-1 flex-col">
      <slot />
    </main>

    <TheFooter v-if="$route.path !== '/'" />
  </div>
</template>
