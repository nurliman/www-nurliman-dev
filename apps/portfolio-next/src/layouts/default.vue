<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<template>
  <Header />

  <div class="flex min-h-full flex-col pt-[50px] md:pt-14">
    <main class="flex flex-1 flex-col">
      <slot />
    </main>

    <Footer v-if="$route.path !== '/'" />
  </div>
</template>
