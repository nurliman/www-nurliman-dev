<script setup lang="ts">
const { isSidebarOpen, className } = defineProps<{
  className?: string;
  isSidebarOpen: boolean;
}>();
const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    :class="[
      'flex-center the-white-button relative',
      'h-auto min-h-[3rem] w-12 border-r',
      className,
    ]"
    @click="emit('click')"
  >
    <NuxtImg
      src="/assets/menu-burger.svg"
      alt="Menu"
      height="28px"
      width="28px"
      loading="lazy"
      class="absolute-center transition-opacity"
      :class="{ 'opacity-0': isSidebarOpen, 'opacity-100': !isSidebarOpen }"
    />
    <NuxtImg
      src="/assets/menu-close.svg"
      alt="Close"
      height="28px"
      width="28px"
      loading="lazy"
      class="absolute-center transition-opacity"
      :class="{ 'opacity-0': !isSidebarOpen, 'opacity-100': isSidebarOpen }"
    />
  </button>
</template>
