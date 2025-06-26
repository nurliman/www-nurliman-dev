<script lang="ts">
  import { onMount } from "svelte";

  let dots = $state("...");

  onMount(() => {
    const timer = setInterval(() => {
      if (dots.length >= 3) {
        dots = ".";
      } else {
        dots = `${dots}.`;
      }
    }, 500);

    return () => {
      clearInterval(timer);
    };
  });
</script>

<div class="flex-center flex-1">
  <span class="font-transducer-extended text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
    Coming soon{dots}
  </span>
</div>
