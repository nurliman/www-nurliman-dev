import { For, Show, createSignal, onMount } from "solid-js";
import { clsx } from "clsx";
import { socials } from "~/data/socials";

export default function TheFooter() {
  const [currentYear, setCurrentYear] = createSignal(new Date().getFullYear());

  onMount(() => {
    setCurrentYear(new Date().getFullYear());
  });

  return (
    <footer class="bg-zinc-900 px-4 pb-28 pt-10 text-zinc-400 sm:px-6 lg:px-8">
      <div
        class={clsx([
          "flex flex-col-reverse items-center justify-between md:flex-row",
          "mx-auto max-w-[90rem]",
          "text-sm max-md:text-center",
        ])}
      >
        <div>© {currentYear()} All rights reserved.</div>
        <div class="h-6 md:h-0" />
        <div class="flex-center flex-row">
          <For each={socials}>
            {(social, index) => (
              <>
                <a
                  href={social.link}
                  class="underline underline-offset-2 hover:text-zinc-100"
                  target="_blank"
                >
                  {social.name}
                </a>
                <Show when={index() < socials.length - 1}>
                  <span>&nbsp;|&nbsp;</span>
                </Show>
              </>
            )}
          </For>
        </div>
      </div>
    </footer>
  );
}
