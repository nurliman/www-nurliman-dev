<script setup lang="ts">
import type { InputTypeHTMLAttribute, TextareaHTMLAttributes, PropType } from "vue";
import { ref } from "vue";

export type InputTag = "input" | "textarea";

export type InputTextProps<T extends InputTag> = {
  component?: T;
  type?: InputTypeHTMLAttribute;
  inputContainerClass?: string;
  inputClass?: string;
  label?: string;
  labelClass?: string;
  modelValue?: string;
};

const inputElement = ref<null | HTMLElement>(null);

defineOptions({
  inheritAttrs: false,
});

defineEmits(["update:modelValue"]);

defineProps({
  component: {
    type: String as PropType<InputTag>,
    default: "input",
  },
  type: {
    type: String as PropType<InputTypeHTMLAttribute>,
    default: "text",
  },
  rows: String as PropType<TextareaHTMLAttributes["rows"]>,
  class: String,
  inputContainerClass: String,
  inputClass: String,
  label: String,
  labelClass: String,
  modelValue: String,
});
</script>

<template>
  <div :class="['flex flex-col items-start space-y-px', $props.class]">
    <label v-if="!!label" :class="labelClass" :for="inputElement?.id">{{ label }}</label>
    <label
      class="brutal-shadow-sm w-full cursor-text border-2 bg-white p-2.5"
      :class="inputContainerClass"
      :for="inputElement?.id"
    >
      <component
        v-uid
        ref="inputElement"
        :is="component"
        :type="component === 'input' ? type : undefined"
        :rows="component === 'textarea' ? rows : undefined"
        :class="['h-full w-full focus:outline-none', inputClass]"
        :value="modelValue"
        v-bind="$attrs"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </label>
  </div>
</template>
