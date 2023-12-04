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

  <div class="flex min-h-full flex-col pt-[50px] md:pt-14">
    <main class="flex flex-1 flex-col">
      <slot />
    </main>

    <Footer v-if="!isHome" />
  </div>
</template>
