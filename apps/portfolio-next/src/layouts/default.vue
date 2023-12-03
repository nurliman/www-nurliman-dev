<script setup lang="ts">
import { ref, watch } from "vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

const route = useRoute();
const isHome = ref(route.path === "/");

watch(
  () => route.path,
  (path) => {
    isHome.value = path === "/";
  },
);
</script>

<template>
  <Header />

  <main class="flex min-h-full pt-[50px] md:pt-14">
    <slot />
  </main>

  <Footer v-if="!isHome" />
</template>
