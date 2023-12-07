<script setup lang="ts">
import { ref } from "vue";
import { sections } from "~/data/sections";
import reverse from "lodash-es/reverse";
import anime from "animejs/lib/anime.es.js";
import NuxtLink from "#app/components/nuxt-link";
import TheButton from "~/components/TheButton";
import TheHamburgerButton from "~/components/TheHamburgerButton.vue";
import TheThemeSwithcerButton from "~/components/TheThemeSwithcerButton.vue";
import TheSidebar from "~/components/TheSidebar.vue";

const sidebarOpened = ref(false);
const sidebarRef = ref<InstanceType<typeof TheSidebar> | null>(null);

const changeMenuOpened = (isOpen?: boolean) => {
  if (!sidebarRef.value) return;

  isOpen ??= !sidebarOpened.value;
  let modalX = ["-100%", "0%"];
  let backdropOpacity = [0, 0.5];

  if (!isOpen) {
    modalX = reverse(modalX);
    backdropOpacity = reverse(backdropOpacity);
  }

  anime({
    targets: sidebarRef.value?.backdropRef,
    duration: 300,
    easing: "easeInOutQuad",
    opacity: backdropOpacity,
    translateZ: 0,
  });

  anime({
    targets: sidebarRef.value?.modalRef,
    duration: 200,
    easing: "easeInOutQuad",
    translateX: modalX,
    translateZ: 0,
  });

  sidebarOpened.value = isOpen;
};

const closeMenu = () => {
  sidebarOpened.value && changeMenuOpened(false);
};
</script>

<template>
  <header class="fixed top-0 z-30 w-full overflow-hidden border-b-2 bg-white p-0">
    <div class="mx-auto flex max-w-[90rem] items-center justify-between">
      <TheHamburgerButton
        class="md:hidden"
        :is-sidebar-open="sidebarOpened"
        @click="changeMenuOpened"
      />
      <NuxtLink to="/" class="contents" @click="closeMenu">
        <div
          :class="[
            'font-racing-sans text-[1.75rem]',
            'max-md:absolute-center',
            'md:text-3xl',
            'md:px-4 md:py-2',
          ]"
        >
          nurliman.
        </div>
      </NuxtLink>
      <div class="hidden h-7 w-px bg-zinc-600 md:flex" />
      <nav class="hidden md:contents">
        <ul class="flex flex-1 flex-row px-3">
          <li v-for="section in sections" :key="section.id" class="contents">
            <TheButton
              :component="NuxtLink"
              :to="section.link"
              class="rounded-full px-3 py-1.5 text-xs uppercase"
              @click="closeMenu"
            >
              {{ section.name }}
            </TheButton>
          </li>
        </ul>
      </nav>
      <TheThemeSwithcerButton />
    </div>
  </header>

  <client-only>
    <TheSidebar
      ref="sidebarRef"
      :is-open="sidebarOpened"
      :header-height="50"
      @change="({ isOpen }) => changeMenuOpened(isOpen)"
    />
  </client-only>
</template>
