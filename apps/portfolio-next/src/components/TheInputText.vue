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
  errorMessage: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue", "focus"]);

const onFocus = (e: FocusEvent) => {
  (e.target as HTMLInputElement)?.select?.();
  emit("focus", e);
};

const onInput = (e: InputEvent) => {
  emit("update:modelValue", (e.target as HTMLInputElement)?.value);
};
</script>

<template>
  <div :class="['flex flex-col items-start', $props.class]">
    <label v-if="!!label" :class="['mb-px', labelClass]" :for="inputElement?.id">{{ label }}</label>
    <label
      :class="[
        'brutal-shadow-sm',
        inputContainerClass,
        $style.inputContainer,
        !!errorMessage && $style.inputContainerError,
      ]"
      :for="inputElement?.id"
    >
      <component
        v-uid
        ref="inputElement"
        :is="component"
        :type="component === 'input' ? type : undefined"
        :rows="component === 'textarea' ? rows : undefined"
        :class="[$style.input, inputClass]"
        :value="modelValue"
        v-bind="$attrs"
        @focus="onFocus"
        @input="onInput"
      />
    </label>
    <div v-if="!!errorMessage" class="text-xs text-red-500">{{ errorMessage }}</div>
  </div>
</template>

<style module>
.inputContainer {
  @apply mb-1.5 w-full border-2 p-2.5;
  @apply cursor-text;
  @apply focus-within:ring-2 focus-within:ring-purple-400;

  &,
  & > .input {
    background-color: theme("colors.white");

    :where(html:global(.dark)) & {
      background-color: theme("colors.black");
    }
  }
}

.inputContainerError {
  @apply ring-2 ring-red-400;
}

.input {
  @apply h-full w-full;
  @apply focus:outline-none;

  :where(html:global(.dark)) & {
    &::placeholder {
      color: theme("colors.zinc.400");
    }
  }

  &:-webkit-autofill {
    &,
    &:hover,
    &:focus,
    &:active {
      -webkit-background-clip: text;
      -webkit-text-fill-color: theme("colors.black");
      box-shadow: 0 0 0px 1000px theme("colors.purple.100") inset;
      font-family: theme("fontFamily.transducer");
      transition: background-color 5000s ease-in-out 0s;

      .inputContainer:has(&) {
        background-color: theme("colors.purple.100");
      }
    }
  }
}
</style>
