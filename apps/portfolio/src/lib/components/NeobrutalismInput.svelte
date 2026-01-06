<script lang="ts" generics="TInputTag extends InputTag">
  import { cn } from "$lib/utils/shadcn";
  import compact from "lodash-es/compact";
  import endsWith from "lodash-es/endsWith";
  import type { FocusEventHandler, SvelteHTMLElements } from "svelte/elements";
  import styles from "./NeobrutalismInput.module.css";

  export type InputTag = "input" | "textarea";

  type InputProps<T extends InputTag> = SvelteHTMLElements[T] & {
    component?: InputTag;
  };

  export type NeobrutalismInputProps<T extends InputTag> = InputProps<T> & {
    inputContainerClass?: string;
    inputClass?: string;
    labelClass?: string;
    label?: string;
    errorMessage?: string | string[] | null | false;
  };

  const defaultId = $props.id();

  let {
    component = "input",
    class: className,
    inputContainerClass,
    inputClass,
    labelClass,
    label,
    errorMessage = [],
    onfocus,
    value = $bindable(),
    id = $bindable(defaultId),
    ...restProps
  }: NeobrutalismInputProps<TInputTag> = $props();

  const normalizedErrors = $derived.by(() => {
    if (!errorMessage) return [];
    let errors = errorMessage;
    errors = Array.isArray(errors) ? errors : [errors];
    errors = compact(errors);
    return errors;
  });
  const isError = $derived(!!normalizedErrors.length);

  type InputFocusEvent = Parameters<FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>>[0];

  const handleFocus = (event: InputFocusEvent) => {
    event?.currentTarget?.select?.();
    onfocus?.(event as any);
  };
</script>

<label for={id} class={cn("flex flex-col items-start", className)}>
  {#if label}
    <div class={cn("mb-1 text-base", labelClass)}>
      {label}
    </div>
  {/if}

  <div
    class={cn(
      "shadow-neobrutalism-sm",
      styles.inputContainer,
      isError && styles.inputContainerError,
      inputContainerClass,
    )}
  >
    {#if component === "input"}
      <input
        {id}
        class={cn(styles.input, inputClass)}
        onfocus={handleFocus}
        {...restProps}
        bind:value
      />
    {:else if component === "textarea"}
      <textarea
        {id}
        class={cn(styles.input, inputClass)}
        onfocus={handleFocus}
        {...restProps}
        bind:value
      >
      </textarea>
    {/if}
  </div>

  {#if isError}
    <div class="mt-1.5 text-sm text-destructive">
      {#each normalizedErrors as error}
        {error}{endsWith(error, ".") ? " " : ". "}
      {/each}
    </div>
  {/if}
</label>
