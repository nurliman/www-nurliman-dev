<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <Header />

  <main class="flex h-full pt-[50px] md:pt-14">
    <slot />
  </main>

  <footer></footer>
</template>
