<script setup lang="ts">
import NuxtLink from "#app/components/nuxt-link";
import TheInputText from "~/components/TheInputText.vue";
import TheButton from "~/components/TheButton.vue";
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

      <form class="z-[2] flex flex-col space-y-4">
        <TheInputText
          label-class="text-sm md:text-base"
          input-class="text-sm md:text-base"
          name="name"
          label="Full Name"
          placeholder="e.g. John Doe"
        />
        <TheInputText
          label-class="text-sm md:text-base"
          input-class="text-sm md:text-base"
          name="email"
          type="email"
          label="Email Address"
          placeholder="e.g. example@email.com"
        />
        <TheInputText
          label-class="text-sm md:text-base"
          input-class="text-sm md:text-base"
          name="subject"
          label="Subject"
          placeholder="Subject"
        />
        <TheInputText
          label-class="text-sm md:text-base"
          input-class="text-sm md:text-base"
          component="textarea"
          name="message"
          label="Message"
          placeholder="Message"
          rows="7"
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
