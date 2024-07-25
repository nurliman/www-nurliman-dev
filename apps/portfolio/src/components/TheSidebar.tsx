import { Button } from "@/components/ui/button";
import { sections } from "@/data/sections";
import { socials } from "@/data/socials";
import { isActivePath } from "@/utils/isActivePath";
import { clsx } from "clsx";
import { type Accessor, For } from "solid-js";

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
        style={{
          height: `calc(100% - ${props.headerHeight}px)`,
          top: `${props.headerHeight}px`,
          transform: "translateZ(0)",
        }}
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
                  <Button
                    as="a"
                    href={section.link}
                    variant="ghost"
                    class={clsx(
                      "!rounded-none !px-8 !py-5 !justify-start border-b",
                      "font-normal text-xs",
                      isActivePath(section.link, props.currentPath()) && "menu-link-active",
                    )}
                    onClick={() => props.onChange?.(false)}
                  >
                    {section.name}
                  </Button>
                </li>
              )}
            </For>
          </ul>
        </nav>
        <div class="h-px w-px flex-1" />
        <div class="flex border-t bg-white px-8 py-5 transition-colors dark:bg-black">
          <ul class="flex flex-row space-x-3.5">
            <For each={socials}>
              {(social) => (
                <li class="flex">
                  <Button
                    as="a"
                    href={social.link}
                    target="_blank"
                    size="icon"
                    variant="outline"
                    class="border-black/70 dark:border-border"
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
                  </Button>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </>
  );
}
