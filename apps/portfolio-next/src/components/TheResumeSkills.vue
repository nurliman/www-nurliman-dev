<script setup lang="ts">
import type { PropType } from "vue";
import TheProgressBar from "~/components/TheProgressBar.vue";

export type Skill = {
  name: string;
  value: number;
};

defineProps({
  data: {
    type: Array as PropType<Array<Skill> | ReadonlyArray<Skill>>,
    required: true,
  },
});
</script>

<template>
  <ul class="flex flex-col">
    <li v-for="skill in $props.data" :key="skill.name + skill.value" class="mb-3 flex flex-col">
      <div class="mb-0.5 flex items-center justify-between">
        <div class="text-sm font-medium">{{ skill.name }}</div>
        <div class="text-xs font-medium text-black/70 dark:text-white/70">
          {{ skill.value * 100 + "%" }}
        </div>
      </div>
      <TheProgressBar :progress="skill.value" />
    </li>
  </ul>
</template>
