import type { ButtonHTMLAttributes, SetupContext } from "vue";
import type { VariantProps } from "cva";
import { defineComponent, h } from "vue";
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
      sm: "brutal-btn-bordered-sm",
      true: "brutal-btn-bordered",
    },
    shadow: {
      sm: "brutal-btn-shadow-sm",
      true: "brutal-btn-shadow",
    },
  },
});

export type ButtonVariant = VariantProps<typeof buttonVariant>;

const TheButton = defineComponent({
  name: "TheButton",
  props: {
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
  },
  setup({ component, color, border, shadow, type }, { slots }: SetupContext<object>) {
    return () =>
      h(
        component,
        {
          type: ["input", "button"].includes(component) ? type : undefined,
          class: buttonVariant({ border, color, shadow }),
        },
        slots.default?.(),
      );
  },
});

export default TheButton;
