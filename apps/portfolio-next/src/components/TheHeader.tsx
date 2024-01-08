import { clsx } from "clsx";
import { For, Show, createSignal } from "solid-js";
import { createPresence } from "@solid-primitives/presence";
import { sections } from "~/data/sections";
import TheButton from "~/components/TheButton";
import TheHamburgerButton from "~/components/TheHamburgerButton";
import TheThemeSwithcerButton from "~/components/TheThemeSwithcerButton";
import TheSidebar from "~/components/TheSidebar";

export default function TheHeader() {
  const [sidebarOpened, setSidebarOpened] = createSignal(false);
  const sidebarPresence = createPresence(sidebarOpened, { transitionDuration: 300 });

  const changeMenuOpened = (isOpen?: boolean) => {
    setSidebarOpened((sidebarOpened) => (isOpen ??= !sidebarOpened));
  };

  const closeMenu = () => {
    sidebarOpened() && changeMenuOpened(false);
  };

  return (
    <>
      <header
        class={clsx([
          "fixed top-0 z-30 w-full overflow-hidden border-b-2 bg-white p-0",
          "dark:bg-black dark:text-white",
          "transition-colors",
        ])}
      >
        <div class="mx-auto flex max-w-[90rem] items-center justify-between">
          <TheHamburgerButton
            class="md:hidden"
            isSidebarOpen={sidebarOpened}
            onClick={() => changeMenuOpened()}
          />
          <a href="/" class="contents" onClick={() => closeMenu()}>
            <div
              class={clsx(
                "font-racing-sans text-[1.75rem]",
                "max-md:absolute-center",
                "md:text-3xl",
                "md:px-4 md:py-2",
              )}
            >
              nurliman.
            </div>
          </a>
          <div class="hidden h-7 w-px bg-zinc-600 md:flex" />
          <nav class="hidden md:contents">
            <ul class="flex flex-1 flex-row px-3">
              <For each={sections}>
                {(section) => (
                  <li class="contents">
                    <TheButton
                      component="a"
                      href={section.link}
                      class="rounded-full px-3 py-1.5 text-xs uppercase"
                      onClick={() => closeMenu()}
                    >
                      {section.name}
                    </TheButton>
                  </li>
                )}
              </For>
            </ul>
          </nav>
          <TheThemeSwithcerButton />
        </div>
      </header>

      <Show when={sidebarPresence.isMounted()}>
        <TheSidebar
          isOpen={sidebarPresence.isVisible}
          headerHeight={50}
          onChange={(isOpen) => changeMenuOpened(isOpen)}
        />
      </Show>
    </>
  );
}
