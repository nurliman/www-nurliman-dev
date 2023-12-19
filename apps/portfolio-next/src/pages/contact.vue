<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/valibot";
import {
  string as vString,
  object as vObject,
  email as vEmail,
  minLength as vMinLength,
} from "valibot";
import NuxtLink from "#app/components/nuxt-link";
import TheInputText from "~/components/TheInputText.vue";
import TheButton from "~/components/TheButton.vue";

const schema = vObject({
  name: vString([vMinLength(1, "Please enter your name")]),
  email: vString([vMinLength(1, "Please enter your email"), vEmail("Please enter a valid email")]),
  subject: vString([vMinLength(1, "Please enter a subject")]),
  message: vString([vMinLength(1, "Please enter a message")]),
});

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(schema),
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

const onSubmit = handleSubmit(
  (values) => {
    alert(JSON.stringify(values, null, 2));
  },
  () => {
    alert("Please fill in the form correctly");
  },
);
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.innerContainer">
      <div class="mb-6 md:mb-8" />
      <h1 :class="$style.heading1">Get in touch</h1>
      <div class="mb-5" />

      <div class="flex flex-col items-start space-y-2">
        <TheButton border color="zinc" shadow="sm" :class="$style.infoBtn"
          >Residence: Bandung, Indonesia</TheButton
        >
        <TheButton
          :component="NuxtLink"
          to="https://wa.me/6282133258511"
          target="_blank"
          border
          color="zinc"
          shadow="sm"
          :class="$style.infoBtn"
          >Phone: +62 821-3325-8511</TheButton
        >
        <TheButton
          :component="NuxtLink"
          to="mailto:nurlimandiara@gmail.com"
          border
          color="zinc"
          shadow="sm"
          :class="$style.infoBtn"
          >Email: nurlimandiara@gmail.com</TheButton
        >
      </div>

      <div class="mb-5" />

      <form @submit="onSubmit" class="z-[2] flex flex-col space-y-4">
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
        <TheButton type="submit" color="teal" border shadow :class="$style.submitBtn"
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
.container {
  @apply relative;
  @apply flex flex-col;
  @apply mx-auto w-full max-w-[90rem];
}

.innerContainer {
  @apply flex flex-col;
  @apply w-full max-w-xl;
  @apply mx-auto lg:mx-0;
  @apply px-4 sm:px-6 lg:px-8;
}

.heading1 {
  @apply font-transducer-extended font-semibold;
  @apply text-3xl md:text-4xl lg:text-5xl;
}

.infoBtn {
  @apply rounded;
  @apply px-2.5 py-px;
  @apply text-sm md:text-base;
}

.submitBtn {
  @apply self-start;
  @apply p-2 md:p-2.5 lg:p-3;
  @apply text-sm md:text-base;
  @apply min-w-[9rem] md:min-w-[12rem];
}

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
