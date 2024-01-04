<script setup lang="ts">
import { ref, onMounted } from "vue";
import { socials } from "~/data/socials";

const currentYear = ref(new Date().getFullYear());

onMounted(() => {
  currentYear.value = new Date().getFullYear();
});
</script>

<template>
  <footer class="bg-zinc-900 px-4 pb-28 pt-10 text-zinc-400 sm:px-6 lg:px-8">
    <div
      :class="[
        'flex flex-col-reverse items-center justify-between md:flex-row',
        'mx-auto max-w-[90rem]',
        'text-sm max-md:text-center',
      ]"
    >
      <div>© {{ currentYear }} All rights reserved.</div>
      <div class="h-6 md:h-0" />
      <div class="flex-center flex-row">
        <div v-for="(social, index) in socials" :key="social.link + social.name">
          <a
            :href="social.link"
            class="underline underline-offset-2 hover:text-zinc-100"
            target="_blank"
          >
            {{ social.name }}
          </a>
          <span v-if="index < socials.length - 1">&nbsp;|&nbsp;</span>
        </div>
      </div>
    </div>
  </footer>
</template>
