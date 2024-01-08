import type { Accessor } from "solid-js";
import { For, createMemo } from "solid-js";
import { createTween } from "@solid-primitives/tween";
import { clsx } from "clsx";
import { sections } from "~/data/sections";
import { socials } from "~/data/socials";
import { easeInCirc } from "~/utils/easeInCirc";
import TheButton from "~/components/TheButton";

export type TheSidebarProps = {
  isOpen: Accessor<boolean>;
  headerHeight: number;
  onChange?: (isOpen: boolean) => void;
};

export default function TheSidebar(props: TheSidebarProps) {
  const modalX = createMemo<number>(() => (props.isOpen() ? 0 : -100));
  const tweenedModalX = createTween(modalX, {
    duration: 250,
    ease: easeInCirc,
  });

  return (
    <>
      <button
        type="button"
        class={clsx(
          "fixed inset-0 z-10 w-screen bg-black transition-opacity duration-300 md:hidden",
          props.isOpen() ? "pointer-events-auto opacity-50" : "pointer-events-none opacity-0",
        )}
        style={{ transform: "translateZ(0)" }}
        onClick={() => props.onChange?.(false)}
      />

      <div
        class={clsx(
          "fixed z-40 flex w-screen flex-col border-r sm:max-w-xs md:hidden",
          "bg-white transition-colors dark:bg-black",
          "-translate-x-full will-change-transform",
        )}
        style={{
          height: `calc(100vh - ${props.headerHeight}px)`,
          top: `${props.headerHeight}px`,
          transform: `translate3d(${tweenedModalX()}%, 0, 0)`,
        }}
      >
        <nav class="contents">
          <ul class="flex flex-col text-xs uppercase">
            <For each={sections}>
              {(section) => (
                <li class="contents">
                  <TheButton
                    component="a"
                    href={section.link}
                    class="border-b px-8 py-3 hover:font-semibold"
                    onClick={() => props.onChange?.(false)}
                  >
                    {section.name}
                  </TheButton>
                </li>
              )}
            </For>
          </ul>
        </nav>
        <div class="h-px w-px flex-1" />
        <div class="flex border-t bg-white p-5 transition-colors dark:bg-black">
          <ul class="flex flex-row space-x-3.5">
            <For each={socials}>
              {(social) => (
                <li class="flex">
                  <TheButton
                    component="a"
                    href={social.link}
                    target="_blank"
                    class="rounded border p-1.5"
                  >
                    <img
                      src={social.iconUrl}
                      alt={social.name}
                      loading="lazy"
                      class="h-[18px] w-[18px] dark:hidden"
                    />
                    <img
                      src={social.iconDarkUrl}
                      alt={social.name}
                      loading="lazy"
                      class="hidden h-[18px] w-[18px] dark:block"
                    />
                  </TheButton>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </>
  );
}
