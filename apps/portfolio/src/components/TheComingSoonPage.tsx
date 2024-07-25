import { createSignal, onCleanup, onMount } from "solid-js";

export default function TheComingSoonPage() {
  const [dots, setDots] = createSignal("...");

  onMount(() => {
    const timer = setInterval(() => {
      if (dots().length >= 3) {
        setDots(".");
      } else {
        setDots((dots) => `${dots}.`);
      }
    }, 500);

    onCleanup(() => {
      clearInterval(timer);
    });
  });

  return (
    <div class="flex-1 flex-center">
      <span class="text-center font-semibold font-transducer-extended text-3xl md:text-4xl lg:text-5xl">
        Coming soon{dots()}
      </span>
    </div>
  );
}
