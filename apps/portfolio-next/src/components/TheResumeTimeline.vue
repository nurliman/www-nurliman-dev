<script setup lang="ts">
import type { PropType } from "vue";

export type TimelineItem = {
  period: string;
  institution: string;
  title: string;
  description: string;
};

defineProps({
  data: {
    type: Array as PropType<Array<TimelineItem> | ReadonlyArray<TimelineItem>>,
    required: true,
  },
});
</script>

<template>
  <ul class="flex flex-col">
    <li v-for="item in data" :key="item.institution + item.period" :class="$style.timeline">
      <div class="h-1" />
      <div class="mb-px text-sm font-semibold text-teal-700 dark:text-zinc-300">
        {{ item.period }}
      </div>
      <div class="mb-1 text-sm text-zinc-700 dark:text-zinc-400">{{ item.institution }}</div>
      <div class="font-transducer mb-1.5 text-lg font-bold">{{ item.title }}</div>
      <div class="text-sm md:text-[15px]">{{ item.description }}</div>
      <div :class="$style.line">
        <div :class="$style.bullet" />
      </div>
    </li>
  </ul>
</template>

<style module>
.timeline {
  @apply relative;
  @apply flex flex-col;
  @apply pb-8 pl-8;

  &:last-child {
    & .line {
      height: calc(100% - 3rem);

      &::after {
        content: "";
        background-color: var(--line-color);
        @apply absolute -left-0.5 bottom-0;
        @apply block h-[5px] w-[5px];
        @apply rounded-full;
      }
    }
  }
}

.line {
  @apply h-full w-px;
  @apply absolute left-2 top-3.5;
  background-color: var(--line-color);

  --line-color: theme("colors.zinc.400");

  :where(html:global(.dark)) & {
    --line-color: theme("colors.zinc.700");
  }
}

.bullet {
  @apply relative left-0 top-0;

  --bullet-color: theme("colors.white");
  --shadow-color: theme("colors.teal.500 / 50%");
  --shadow-pulse-color: theme("colors.teal.500 / 30%");

  :where(html:global(.dark)) & {
    --bullet-color: theme("colors.black");
    --shadow-color: theme("colors.teal.500 / 40%");
    --shadow-pulse-color: theme("colors.teal.500 / 25%");
  }

  &::before,
  &::after {
    content: "";
    @apply block;
    @apply rounded-full;
    @apply absolute-center;
  }

  &::before {
    @apply h-2.5 w-2.5;
    background-color: theme("colors.teal.500");
    box-shadow: 0 0 0 4px var(--shadow-color);
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  &::after {
    @apply h-[5px] w-[5px];
    background-color: var(--bullet-color);
  }
}

@keyframes pulse {
  50% {
    box-shadow: 0 0 0 4px var(--shadow-pulse-color);
  }
}
</style>
