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
    <div class="flex-center flex-1">
      <span class="font-transducer-extended text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
        Coming soon{dots()}
      </span>
    </div>
  );
}
