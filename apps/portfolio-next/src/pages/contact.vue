<script setup lang="ts">
import NuxtLink from "#app/components/nuxt-link";
import TheInputText from "~/components/TheInputText.vue";
import TheButton from "~/components/TheButton.vue";
</script>

<template>
  <div class="mx-auto flex w-full max-w-[90rem] flex-col">
    <div class="flex w-full max-w-xl flex-col px-4 sm:px-6 lg:max-w-2xl lg:px-8">
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
      <form class="flex flex-col space-y-4">
        <TheInputText name="name" label="Full Name" placeholder="e.g. John Doe" />
        <TheInputText
          name="email"
          type="email"
          label="Email Address"
          placeholder="e.g. example@email.com"
        />
        <TheInputText name="subject" label="Subject" placeholder="Subject" />
        <TheInputText
          component="textarea"
          name="message"
          label="Message"
          placeholder="Message"
          rows="7"
        />
        <div />
        <TheButton
          type="submit"
          color="teal"
          border
          shadow
          class="min-w-[12rem] self-start p-2 md:p-2.5 lg:p-3"
          >Send</TheButton
        >
      </form>
      <div class="mb-16" />
    </div>
  </div>
</template>

<style module>
.heading1 {
  @apply font-transducer-extended font-semibold;
  @apply text-3xl md:text-4xl lg:text-5xl;
}

.infoBtn {
  @apply rounded;
  @apply px-2.5 py-px;
  @apply text-[15px] md:text-base;
}
</style>
