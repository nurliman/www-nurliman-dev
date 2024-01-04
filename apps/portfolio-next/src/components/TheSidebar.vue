<script setup lang="ts">
import { ref } from "vue";
import { sections } from "~/data/sections";
import { socials } from "~/data/socials";
import TheButton from "~/components/TheButton.vue";

const backdropRef = ref<HTMLElement | null>(null);
const modalRef = ref<HTMLElement | null>(null);

const { isOpen, headerHeight } = defineProps<{
  isOpen: boolean;
  headerHeight: number;
}>();

const emit = defineEmits<{
  (e: "change", payload: { isOpen: boolean }): void;
}>();

defineExpose({
  backdropRef,
  modalRef,
});
</script>

<template>
  <button
    ref="backdropRef"
    type="button"
    class="fixed inset-0 z-10 w-screen bg-black opacity-0 md:hidden"
    :class="{
      'pointer-events-auto': isOpen,
      'pointer-events-none': !isOpen,
    }"
    @click="emit('change', { isOpen: false })"
  />

  <div
    ref="modalRef"
    :class="[
      'fixed z-40 flex w-screen flex-col border-r sm:max-w-xs md:hidden',
      'bg-white transition-colors dark:bg-black',
      '-translate-x-full will-change-transform',
    ]"
    :style="{
      height: `calc(100vh - ${headerHeight}px)`,
      top: `${headerHeight}px`,
    }"
  >
    <nav class="contents">
      <ul class="flex flex-col text-xs uppercase">
        <li v-for="section in sections" :key="section.id" class="contents">
          <TheButton
            component="a"
            :href="section.link"
            class="border-b px-8 py-3 hover:font-semibold"
            @click="emit('change', { isOpen: false })"
          >
            {{ section.name }}
          </TheButton>
        </li>
      </ul>
    </nav>
    <div class="h-px w-px flex-1" />
    <div class="flex border-t bg-white p-5 transition-colors dark:bg-black">
      <ul class="flex flex-row space-x-3.5">
        <li v-for="social in socials" :key="social.link + social.name" class="flex">
          <TheButton component="a" :href="social.link" target="_blank" class="rounded border p-1.5">
            <img
              :src="social.iconUrl"
              :alt="social.name"
              loading="lazy"
              class="h-[18px] w-[18px] dark:hidden"
            />
            <img
              :src="social.iconDarkUrl"
              :alt="social.name"
              loading="lazy"
              class="hidden h-[18px] w-[18px] dark:block"
            />
          </TheButton>
        </li>
      </ul>
    </div>
  </div>
</template>
