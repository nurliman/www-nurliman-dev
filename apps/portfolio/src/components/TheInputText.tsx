import { clsx } from "clsx";
import { type JSX, Show, createUniqueId, mergeProps, splitProps } from "solid-js";
import { Dynamic, type DynamicProps } from "solid-js/web";
import styles from "./TheInputText.module.css";

export type InputTag = "input" | "textarea";

export type OnFocus = JSX.FocusEventHandler<HTMLElement, FocusEvent>;

export type TheInputTextBaseProps = Pick<
  JSX.InputHTMLAttributes<HTMLInputElement>,
  "children" | "class" | "classList" | "onFocus"
> & {
  inputContainerClass?: string;
  inputClass?: string;
  label?: string;
  labelClass?: string;
  errorMessage?: Element | false | null | string;
};

export type TheInputTextProps<T extends InputTag> = TheInputTextBaseProps &
  Omit<DynamicProps<T>, keyof TheInputTextBaseProps | "component"> & { component?: T };

function TheInputText(props: TheInputTextProps<"input">): JSX.Element;
function TheInputText<T extends InputTag>(props: TheInputTextProps<T>): JSX.Element;
function TheInputText<T extends InputTag = "input">(props: TheInputTextProps<T>): JSX.Element {
  const inputElemId = createUniqueId();

  const propsWithDefaults = mergeProps(
    {
      component: "input",
      id: inputElemId,
    },
    props,
  );

  const [localProps, restProps] = splitProps(propsWithDefaults, [
    "children",
    "component",
    "class",
    "classList",
    "id",
    "inputContainerClass",
    "inputClass",
    "label",
    "labelClass",
    "errorMessage",
    "onFocus",
  ]);

  return (
    <label
      for={localProps.id}
      class={clsx("flex flex-col items-start", localProps.class, localProps.classList)}
    >
      <Show when={!!localProps.label}>
        <div class={clsx("mb-px", localProps.labelClass)}>{localProps.label}</div>
      </Show>

      <div
        class={clsx(
          "brutal-shadow-sm",
          localProps.inputContainerClass,
          styles.inputContainer,
          !!localProps.errorMessage && styles.inputContainerError,
        )}
      >
        <Dynamic
          component={localProps.component as "input" | NonNullable<T>}
          class={clsx(styles.input, localProps.inputClass)}
          id={localProps.id}
          onFocus={
            ((e) => {
              (e.target as HTMLInputElement)?.select?.();
              if (typeof localProps.onFocus === "function") {
                (localProps.onFocus as OnFocus)?.(e);
              }
            }) satisfies OnFocus
          }
          {...(restProps as Record<string, unknown>)}
        >
          {localProps.children}
        </Dynamic>
      </div>
      <Show when={!!localProps.errorMessage}>
        <div class="text-red-500 text-xs">{localProps.errorMessage}</div>
      </Show>
    </label>
  );
}

export default TheInputText;
