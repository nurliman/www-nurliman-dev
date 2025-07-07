<script lang="ts">
  import ClipboardIcon from "@lucide/svelte/icons/clipboard";
  import NeobrutalismButton from "$lib/components/NeobrutalismButton.svelte";
  import NeobrutalismInput from "$lib/components/NeobrutalismInput.svelte";
  import * as Form from "$lib/components/ui/form";
  import { env } from "$lib/env";
  import { contactFormSchema } from "$lib/schemas";
  import copy from "copy-to-clipboard";
  import set from "lodash-es/set";
  import { mode } from "mode-watcher";
  import { FetchError, ofetch } from "ofetch";
  import { toast } from "svelte-sonner";
  import { Turnstile } from "svelte-turnstile";
  import { valibot } from "sveltekit-superforms/adapters";
  import { defaults, superForm } from "sveltekit-superforms/client";
  import styles from "./+page.module.css";

  type InfoItem = {
    label: string;
    value: string;
    link: string;
  };

  const infos: InfoItem[] = [
    {
      label: "Residence",
      value: "Bandung, Indonesia",
      link: "https://maps.app.goo.gl/49vqfMGu8Hso64mF6",
    },
    {
      label: "Phone",
      value: "+62 851-7447-4227",
      link: "https://wa.me/6285174474227",
    },
    {
      label: "Email",
      value: "nurliman@duck.com",
      link: "mailto:nurliman@duck.com",
    },
  ];

  const DEFAULT_ERROR_MESSAGE = "Something went wrong.";

  let resetTurnstile = $state<() => void>();
  let submitLoading = $state(false);

  const form = superForm(defaults(valibot(contactFormSchema)), {
    SPA: true,
    resetForm: false,
    validators: valibot(contactFormSchema),
    onUpdate({ form }) {
      if (!form.valid) {
        console.error("Form validation failed");
        toast.error("Please ensure all fields are filled out correctly.");
        return;
      }
      resetTurnstile?.();
      toast.promise(
        async () => {
          submitLoading = true;
          return ofetch("/api/send-message", {
            method: "post",
            body: form.data,
            timeout: 10000,
          })
            .catch((error) => {
              let message: string;
              if (error instanceof FetchError) {
                console.error(error.data);
                message = `FetchError: ${error?.data?.message || DEFAULT_ERROR_MESSAGE}`;
              } else {
                console.error(error);
                message = `UnknownError: ${error.message || DEFAULT_ERROR_MESSAGE}`;
              }
              throw new Error(message);
            })
            .finally(() => {
              submitLoading = false;
            });
        },
        {
          loading: "Sending message...",
          success: "Message sent successfully.",
          error: (error) => (error as Error)?.message || DEFAULT_ERROR_MESSAGE,
        },
      );
    },
  });

  const { form: formData, enhance } = form;

  // Persists form data across reloads, except captchaToken for security.
  export const snapshot = {
    capture() {
      const value = form.capture();
      set(value, "data.captchaToken", "");
      return value;
    },
    restore(value) {
      set(value, "data.captchaToken", "");
      form.restore(value);
    },
  } satisfies Pick<typeof form, "capture" | "restore">;
</script>

<main class="relative container flex w-full flex-col">
  <div class="mx-auto flex w-full max-w-xl flex-col lg:mx-0">
    <div class="mb-6 md:mb-8"></div>

    <h1 class="font-transducer-extended text-3xl font-semibold md:text-4xl lg:text-5xl">
      Get in touch
    </h1>

    <div class="mb-5"></div>

    <div class="flex flex-col items-start space-y-2">
      {#each infos as item}
        <div class="flex items-center">
          <NeobrutalismButton
            class="h-8 cursor-pointer text-sm md:text-base"
            href={item.link}
            target="_blank"
            size="sm"
            shadow="sm"
            variant="zinc">{item.label}: {item.value}</NeobrutalismButton
          >
          <NeobrutalismButton
            class="z-[2] -ml-0.5 h-8 cursor-pointer"
            size="icon"
            shadow="sm"
            variant="zinc"
            aria-label={`Copy ${item.label}`}
            onclick={() => {
              const isCopied = copy(item.value);
              if (isCopied) {
                toast.success(`${item.label} copied to clipboard`);
              } else {
                toast.error(`Failed to copy ${item.label}`);
              }
            }}
          >
            <ClipboardIcon class="size-4 stroke-[2.5]" />
          </NeobrutalismButton>
        </div>
      {/each}
    </div>

    <div class="mb-5"></div>

    <form class="z-[2] flex flex-col space-y-4" use:enhance>
      <Form.Field {form} name="name">
        {#snippet children({ errors })}
          <Form.Control>
            {#snippet children({ props })}
              <NeobrutalismInput
                {...props}
                label="Full Name"
                placeholder="e.g. John Doe"
                errorMessage={errors}
                bind:value={$formData.name}
              />
            {/snippet}
          </Form.Control>
        {/snippet}
      </Form.Field>

      <Form.Field {form} name="email">
        {#snippet children({ errors })}
          <Form.Control>
            {#snippet children({ props })}
              <NeobrutalismInput
                {...props}
                type="email"
                label="Your Email"
                placeholder="e.g. john.doe@example.com"
                errorMessage={errors}
                bind:value={$formData.email}
              />
            {/snippet}
          </Form.Control>
        {/snippet}
      </Form.Field>

      <Form.Field {form} name="subject">
        {#snippet children({ errors })}
          <Form.Control>
            {#snippet children({ props })}
              <NeobrutalismInput
                {...props}
                label="Subject"
                placeholder="Subject"
                errorMessage={errors}
                bind:value={$formData.subject}
              />
            {/snippet}
          </Form.Control>
        {/snippet}
      </Form.Field>

      <Form.Field {form} name="message">
        {#snippet children({ errors })}
          <Form.Control>
            {#snippet children({ props })}
              <NeobrutalismInput
                {...props}
                component="textarea"
                label="Message"
                placeholder="Message"
                errorMessage={errors}
                rows={7}
                bind:value={$formData.message}
              />
            {/snippet}
          </Form.Control>
        {/snippet}
      </Form.Field>

      <Form.Field {form} name="captchaToken">
        <Form.Control>
          {#snippet children({ props })}
            <Turnstile
              siteKey={env.PUBLIC_CF_TURNSTILE_SITE_KEY}
              responseFieldName={props.name}
              theme={mode.current === "dark" ? "dark" : "light"}
              bind:reset={resetTurnstile}
              on:callback={(e) => {
                $formData.captchaToken = e.detail.token;
              }}
              on:error={() => {
                $formData.captchaToken = "";
              }}
              on:expired={() => {
                $formData.captchaToken = "";
              }}
              on:timeout={() => {
                $formData.captchaToken = "";
              }}
              on:unsupported={() => {
                $formData.captchaToken = "";
              }}
            />
          {/snippet}
        </Form.Control>
        <Form.FieldErrors class="text-destructive text-sm font-normal" />
      </Form.Field>

      <NeobrutalismButton
        class={[
          "cursor-pointer self-start",
          "p-2 md:p-2.5 lg:p-3",
          "text-sm md:text-base",
          "min-w-36 md:min-w-48",
        ]}
        size="lg"
        type="submit"
        disabled={submitLoading}>Send</NeobrutalismButton
      >
    </form>

    <div class="mb-16"></div>

    <img
      class={styles.img}
      src="/assets/undraw_digital_nomad_re_w8uy.svg"
      alt="Digital Nomad"
      fetchpriority="high"
    />
  </div>
</main>
