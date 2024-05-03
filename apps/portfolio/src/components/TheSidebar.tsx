import { For, type Accessor } from "solid-js";
import { clsx } from "clsx";
import { sections } from "@/data/sections";
import { socials } from "@/data/socials";
import { isActivePath } from "@/utils/isActivePath";
import TheButton from "@/components/TheButton";

export type TheSidebarProps = {
  isOpen: Accessor<boolean>;
  currentPath: Accessor<string>;
  headerHeight: number;
  onChange?: (isOpen: boolean) => void;
};

export default function TheSidebar(props: TheSidebarProps) {
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
        data-aria-hidden
        aria-hidden
        aria-label="Sidebar overlay"
      />

      <div
        class={clsx(
          "fixed z-40 flex flex-col will-change-transform md:hidden",
          "w-screen border-r bg-white sm:max-w-xs dark:bg-black",
        )}
        style={{
          height: `calc(100vh - ${props.headerHeight}px)`,
          top: `${props.headerHeight}px`,
          transform: `translate3d(${props.isOpen() ? "0" : "-100%"},0,0)`,
          transition: "background-color .1s ease-in-out,transform .25s cubic-bezier(.55,0,1,.45)",
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
                    class={clsx(
                      "border-b px-8 py-3 hover:font-semibold",
                      isActivePath(section.link, props.currentPath()) && "link-active",
                    )}
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
