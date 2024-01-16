import { For, Show } from "solid-js";
import TheMarquee from "@/components/TheMarquee";

export default function TheContactInfoMarquee() {
  const info = [
    ["Age", "25"],
    ["Residence", "Indonesia"],
    ["Address", "Ujungberung, Bandung"],
    ["e-mail", "nurlimandiara@gmail.com"],
    ["Phone", "+62 851-7447-4227"],
  ] as const;

  return (
    <TheMarquee clone>
      <ul class="flex text-xs">
        <For each={info}>
          {([key, value], index) => (
            <li>
              <span>{key}&nbsp;</span>
              <span class="font-bold">{value}</span>
              <Show when={index() < info.length - 1}>
                <span>&nbsp;|&nbsp;</span>
              </Show>
            </li>
          )}
        </For>
        <li class="mx-4">&#8226;</li>
      </ul>
    </TheMarquee>
  );
}
