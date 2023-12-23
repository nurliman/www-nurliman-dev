<script setup lang="ts">
import type { PropType } from "vue";
import type { VariantProps } from "cva";
import { cva } from "cva";

const badgeVariant = cva({
  variants: {
    color: {
      white: "bg-white text-black dark:bg-black dark:text-white",
      zinc: "bg-zinc-200 text-black dark:bg-zinc-900 dark:text-white",
    },
    border: {
      sm: "border",
      true: "border-2",
    },
    rounded: {
      false: "rounded",
      true: "rounded-full",
    },
    shadow: {
      sm: "brutal-shadow-sm",
      true: "brutal-shadow",
    },
  },
});

export type BadgeVariant = VariantProps<typeof badgeVariant>;

defineProps({
  color: {
    type: String as PropType<BadgeVariant["color"]>,
    default: "white",
  },
  border: {
    type: [Boolean, String] as PropType<BadgeVariant["border"]>,
    default: true,
  },
  shadow: {
    type: [Boolean, String] as PropType<BadgeVariant["shadow"]>,
    default: true,
  },
  rounded: {
    type: Boolean as PropType<BadgeVariant["rounded"]>,
    default: false,
  },
  component: {
    default: "div" as any,
  },
});
</script>

<template>
  <component :is="component" :class="badgeVariant({ border, color, rounded, shadow })">
    <slot />
  </component>
</template>
