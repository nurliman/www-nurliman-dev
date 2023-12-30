<script setup lang="ts">
import { readonly, ref } from "vue";
import { $fetch, FetchError } from "ofetch";
import { toast, updateGlobalOptions } from "vue3-toastify";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/valibot";
import { contactFormSchema } from "~/schemas";
import NuxtLink from "#app/components/nuxt-link";
import TheInputText from "~/components/TheInputText.vue";
import TheButton from "~/components/TheButton.vue";
import "vue3-toastify/dist/index.css";

updateGlobalOptions({
  position: toast.POSITION.BOTTOM_RIGHT,
  pauseOnHover: false,
  autoClose: 3000,
});

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(contactFormSchema),
  initialValues: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
});

const [name, nameAttrs] = defineField("name");
const [email, emailAttrs] = defineField("email");
const [subject, subjectAttrs] = defineField("subject");
const [message, messageAttrs] = defineField("message");

const submitLoading = ref(false);
const onSubmit = handleSubmit(
  (body) => {
    submitLoading.value = true;
    const toastId = toast.loading("Sending message...");

    $fetch("/api/messages", {
      method: "post",
      body,
      timeout: 10000,
    })
      .then(() => {
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          closeOnClick: true,
          closeButton: true,
          type: "success",
          render: "Message sent successfully.",
        });
      })
      .catch((error) => {
        let message: string;
        if (error instanceof FetchError) {
          console.error(error.data);
          message = `FetchError: ${error?.data?.message || "Something went wrong."}`;
        } else {
          console.error(error);
          message = `UnknownError: ${error.message || "Something went wrong."}`;
        }
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          closeOnClick: true,
          closeButton: true,
          type: "error",
          render: message,
        });
      })
      .finally(() => {
        submitLoading.value = false;
      });
  },
  () => {
    toast.error("Please fill in the form correctly.");
  },
);

const styles = readonly({
  infoBtn: "rounded px-2.5 py-px text-sm md:text-base",
});
</script>

<template>
  <div class="relative mx-auto flex w-full max-w-[90rem] flex-col">
    <div class="mx-auto flex w-full max-w-xl flex-col px-4 sm:px-6 lg:mx-0 lg:px-8">
      <div class="mb-6 md:mb-8" />
      <h1 class="font-transducer-extended text-3xl font-semibold md:text-4xl lg:text-5xl">
        Get in touch
      </h1>
      <div class="mb-5" />

      <div class="flex flex-col items-start space-y-2">
        <TheButton border color="zinc" shadow="sm" :class="styles.infoBtn"
          >Residence: Bandung, Indonesia</TheButton
        >
        <TheButton
          :component="NuxtLink"
          to="https://wa.me/6282133258511"
          target="_blank"
          border
          color="zinc"
          shadow="sm"
          :class="styles.infoBtn"
          >Phone: +62 821-3325-8511</TheButton
        >
        <TheButton
          :component="NuxtLink"
          to="mailto:nurlimandiara@gmail.com"
          border
          color="zinc"
          shadow="sm"
          :class="styles.infoBtn"
          >Email: nurlimandiara@gmail.com</TheButton
        >
      </div>

      <div class="mb-5" />

      <form @submit.prevent="onSubmit" class="z-[2] flex flex-col space-y-4">
        <TheInputText
          label-class="text-sm md:text-base"
          input-class="text-sm md:text-base"
          name="name"
          label="Full Name"
          placeholder="e.g. John Doe"
          v-model="name"
          v-bind="nameAttrs"
          v-bind:error-message="errors.name"
        />
        <TheInputText
          label-class="text-sm md:text-base"
          input-class="text-sm md:text-base"
          name="email"
          type="email"
          label="Email Address"
          placeholder="e.g. example@email.com"
          v-model="email"
          v-bind="emailAttrs"
          v-bind:error-message="errors.email"
        />
        <TheInputText
          label-class="text-sm md:text-base"
          input-class="text-sm md:text-base"
          name="subject"
          label="Subject"
          placeholder="Subject"
          v-model="subject"
          v-bind="subjectAttrs"
          v-bind:error-message="errors.subject"
        />
        <TheInputText
          label-class="text-sm md:text-base"
          input-class="text-sm md:text-base"
          component="textarea"
          name="message"
          label="Message"
          placeholder="Message"
          rows="7"
          v-model="message"
          v-bind="messageAttrs"
          v-bind:error-message="errors.message"
        />
        <div />
        <TheButton
          type="submit"
          color="teal"
          border
          shadow
          :disabled="submitLoading"
          :class="[
            'self-start',
            'p-2 md:p-2.5 lg:p-3',
            'text-sm md:text-base',
            'min-w-[9rem] md:min-w-[12rem]',
          ]"
          >Send</TheButton
        >
      </form>

      <div class="mb-16" />

      <img
        src="/assets/undraw_digital_nomad_re_w8uy.svg"
        alt="Digital Nomad"
        loading="lazy"
        :class="$style.img"
      />
    </div>
  </div>
</template>

<style module>
.img {
  @apply lg:absolute;
  @apply lg:top-1/2 lg:-translate-y-1/2;
  @apply lg:right-3 xl:right-24;
  @apply w-full max-w-sm sm:max-w-md xl:max-w-lg;
  @apply min-h-[26.25rem] sm:min-h-[30.625rem];
  @apply mx-auto lg:mx-0;
  @apply aspect-[32/35];
}
</style>
