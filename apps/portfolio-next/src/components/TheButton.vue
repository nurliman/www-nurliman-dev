<script setup lang="ts">
import type { ButtonHTMLAttributes, PropType } from "vue";
import type { VariantProps } from "cva";
import { cva } from "cva";

const buttonVariant = cva({
  base: "brutal-btn",
  variants: {
    color: {
      "white-pink": "brutal-btn-white-pink",
      white: "brutal-btn-white",
      zinc: "brutal-btn-zinc",
      teal: "brutal-btn-teal",
    },
    border: {
      sm: "brutal-btn-border-sm",
      true: "brutal-btn-border",
    },
    shadow: {
      sm: "brutal-shadow-sm activable",
      true: "brutal-shadow activable",
    },
  },
});

export type ButtonVariant = VariantProps<typeof buttonVariant>;

defineProps({
  color: String as PropType<ButtonVariant["color"]>,
  border: [Boolean, String] as PropType<ButtonVariant["border"]>,
  shadow: [Boolean, String] as PropType<ButtonVariant["shadow"]>,
  component: {
    default: "button" as any,
  },
  type: {
    type: String as PropType<ButtonHTMLAttributes["type"]>,
    default: "button",
  },
});
</script>

<template>
  <component
    :is="component"
    :type="['input', 'button'].includes(component) ? type : undefined"
    :class="buttonVariant({ border, color, shadow })"
  >
    <slot />
  </component>
</template>
