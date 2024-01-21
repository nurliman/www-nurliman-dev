import { clsx } from "clsx";
import { For, Show, createSignal, onCleanup, onMount } from "solid-js";
import { createMediaQuery } from "@solid-primitives/media";
import { sections } from "@/data/sections";
import { isActivePath } from "@/utils/isActivePath";
import TheButton from "@/components/TheButton";
import TheHamburgerButton from "@/components/TheHamburgerButton";
import TheThemeSwithcerButton from "@/components/TheThemeSwithcerButton";
import TheSidebar from "@/components/TheSidebar";

export type TheHeaderProps = {
  currentPath: string;
};

export default function TheHeader(props: TheHeaderProps) {
  const isMobile = createMediaQuery("(max-width: 767px)", false);
  const [currentPath, setCurrentPath] = createSignal(props.currentPath);
  const [sidebarOpened, setSidebarOpened] = createSignal(false);

  const changeMenuOpened = (isOpen?: boolean) => {
    setSidebarOpened((sidebarOpened) => (isOpen ??= !sidebarOpened));
  };

  const closeMenu = () => {
    sidebarOpened() && changeMenuOpened(false);
  };

  onMount(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setPath = (evt?: any) => {
      const pathname = evt?.target?.location?.pathname || window.location.pathname;
      setCurrentPath(pathname);
    };

    setPath();

    document.addEventListener("astro:after-swap", setPath);

    onCleanup(() => {
      document.removeEventListener("astro:after-swap", setPath);
    });
  });

  return (
    <>
      <header
        class={clsx(
          "fixed top-0 z-30 w-full overflow-hidden border-b-2",
          "bg-white transition-colors dark:bg-black dark:text-white",
          "p-0 md:px-6",
        )}
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
                      class={clsx(
                        "rounded-full px-3 py-1.5 text-xs uppercase",
                        isActivePath(section.link, currentPath()) && "link-active",
                      )}
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

      <Show when={isMobile()}>
        <TheSidebar
          isOpen={sidebarOpened}
          currentPath={currentPath}
          headerHeight={50}
          onChange={(isOpen) => changeMenuOpened(isOpen)}
        />
      </Show>
    </>
  );
}
