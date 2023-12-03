<script setup lang="ts">
import { ref } from "vue";
import { sections } from "~/data/sections";
import { socials } from "~/data/socials";

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
    class="fixed inset-0 z-10 w-screen bg-black opacity-0 opacity-0 md:hidden"
    :class="{
      'pointer-events-auto': isOpen,
      'pointer-events-none': !isOpen,
    }"
    @click="emit('change', { isOpen: false })"
  />

  <div
    ref="modalRef"
    :class="[
      'fixed z-40 flex w-screen flex-col border-r bg-white sm:max-w-xs md:hidden',
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
          <NuxtLink
            :to="section.link"
            class="the-white-button border-b px-8 py-3 hover:font-semibold"
            @click="emit('change', { isOpen: false })"
          >
            {{ section.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="h-px w-px flex-1" />
    <div class="flex border-t bg-white p-5">
      <ul class="flex flex-row space-x-3.5">
        <li v-for="social in socials" :key="social.link + social.name" class="flex">
          <NuxtLink
            :to="social.link"
            target="_blank"
            class="rounded border p-1.5 hover:bg-zinc-200"
          >
            <img :src="social.iconUrl" :alt="social.name" class="h-[18px] w-[18px]" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
