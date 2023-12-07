<script setup lang="ts">
import TheButton from "~/components/TheButton.vue";

const { isSidebarOpen } = defineProps<{
  isSidebarOpen: boolean;
}>();
const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <TheButton
    :class="['flex-center relative', 'h-auto min-h-[3rem] w-12 border-r']"
    @click="emit('click')"
  >
    <img
      src="/assets/menu-burger.svg"
      alt="Menu"
      height="28px"
      width="28px"
      loading="lazy"
      class="absolute-center transition-opacity"
      :class="{ 'opacity-0': isSidebarOpen, 'opacity-100': !isSidebarOpen }"
    />
    <img
      src="/assets/menu-close.svg"
      alt="Close"
      height="28px"
      width="28px"
      loading="lazy"
      class="absolute-center transition-opacity"
      :class="{ 'opacity-0': !isSidebarOpen, 'opacity-100': isSidebarOpen }"
    />
  </TheButton>
</template>
