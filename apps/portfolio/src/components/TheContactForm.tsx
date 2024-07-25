import TheButton from "@/components/TheButton";
import TheInputText from "@/components/TheInputText";
import Turnstile, { type TurnstileRef } from "@/components/Turnstile";
import { env } from "@/env";
import { tanstackFormValibotValidator } from "@/utils/tanstackFormValibotValidator";
import { type ContactForm, contactFormSchema } from "@nurliman.dev/schemas";
import { createForm } from "@tanstack/solid-form";
import { clsx } from "clsx";
import { FetchError, ofetch } from "ofetch";
import { Show, createSignal } from "solid-js";
import { Portal } from "solid-js/web";
import { Toaster, toast } from "solid-sonner";

const DEFAULT_ERROR_MESSAGE = "Something went wrong.";

export default function TheContactForm() {
  let turnstileRef: TurnstileRef | undefined;
  const [submitLoading, setSubmitLoading] = createSignal(false);

  const form = createForm(() => ({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      captchaToken: "",
    } satisfies ContactForm,
    onSubmitInvalid: () => {
      console.error("Invalid form");
      toast.error("Please fill in the form correctly.");
    },
    onSubmit: ({ value }) => {
      toast.promise(
        async () => {
          setSubmitLoading(true);
          return ofetch("/api/messages", {
            baseURL: env.PUBLIC_MESSAGE_SENDER_SERVICE_HOST,
            method: "post",
            body: value,
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
              setSubmitLoading(false);
              turnstileRef?.reset?.();
            });
        },
        {
          loading: "Sending message...",
          success: "Message sent successfully.",
          error: (error: Error) => error?.message || DEFAULT_ERROR_MESSAGE,
        },
      );
    },
    validatorAdapter: tanstackFormValibotValidator,
  }));

  return (
    <form.Provider>
      <Portal>
        <Toaster closeButton position="bottom-right" />
      </Portal>
      <form
        class="z-[2] flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <form.Field
          name="name"
          validators={{
            onChange: contactFormSchema.entries.name,
          }}
        >
          {(field) => (
            <TheInputText
              labelClass="text-sm md:text-base"
              inputClass="text-sm md:text-base"
              name={field().name}
              label="Full Name"
              placeholder="e.g. John Doe"
              value={field().state.value}
              onBlur={field().handleBlur}
              onInput={(e) => field().handleChange(e.target.value)}
              errorMessage={field().state.meta.errors?.[0]}
            />
          )}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onChange: contactFormSchema.entries.email,
          }}
        >
          {(field) => (
            <TheInputText
              labelClass="text-sm md:text-base"
              inputClass="text-sm md:text-base"
              name={field().name}
              type="email"
              label="Email Address"
              placeholder="e.g. example@email.com"
              value={field().state.value}
              onBlur={field().handleBlur}
              onInput={(e) => field().handleChange(e.target.value)}
              errorMessage={field().state.meta.errors?.[0]}
            />
          )}
        </form.Field>

        <form.Field
          name="subject"
          validators={{
            onChange: contactFormSchema.entries.subject,
          }}
        >
          {(field) => (
            <TheInputText
              labelClass="text-sm md:text-base"
              inputClass="text-sm md:text-base"
              name={field().name}
              label="Subject"
              placeholder="Subject"
              value={field().state.value}
              onBlur={field().handleBlur}
              onInput={(e) => field().handleChange(e.target.value)}
              errorMessage={field().state.meta.errors?.[0]}
            />
          )}
        </form.Field>

        <form.Field
          name="message"
          validators={{
            onChange: contactFormSchema.entries.message,
          }}
        >
          {(field) => (
            <TheInputText
              labelClass="text-sm md:text-base"
              inputClass="text-sm md:text-base"
              component="textarea"
              name={field().name}
              label="Message"
              placeholder="Message"
              rows={7}
              value={field().state.value}
              onBlur={field().handleBlur}
              onInput={(e) => field().handleChange(e.target.value)}
              errorMessage={field().state.meta.errors?.[0]}
            />
          )}
        </form.Field>

        <form.Field
          name="captchaToken"
          validators={{
            onChange: contactFormSchema.entries.captchaToken,
          }}
        >
          {(field) => (
            <div>
              <Turnstile
                ref={turnstileRef}
                sitekey={env.PUBLIC_CF_TURNSTILE_SITE_KEY}
                theme="auto"
                retry="auto"
                refreshExpired="auto"
                onVerify={(token) => field().handleChange(token)}
                onError={() => field().handleChange("")}
                onExpire={() => field().handleChange("")}
                onTimeout={() => field().handleChange("")}
                onUnsupported={() => field().handleChange("")}
              />
              <Show when={!!field().state.meta.errors?.[0]}>
                <div class="mt-1.5 text-red-500 text-xs">{field().state.meta.errors[0]}</div>
              </Show>
            </div>
          )}
        </form.Field>

        <TheButton
          type="submit"
          color="teal"
          border
          shadow
          disabled={submitLoading()}
          class={clsx(
            "self-start",
            "p-2 md:p-2.5 lg:p-3",
            "text-sm md:text-base",
            "min-w-[9rem] md:min-w-[12rem]",
          )}
        >
          Send
        </TheButton>
      </form>
    </form.Provider>
  );
}
