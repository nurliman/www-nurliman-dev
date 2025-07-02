<script lang="ts">
  import { HEADER_HEIGHT } from "$lib/constants";
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

<!-- '+ 2' includes the header's 2px bottom border for correct alignment -->
<div class="flex-center flex-1" style:min-height={`calc(100vh - ${HEADER_HEIGHT + 2}px)`}>
  <span class="font-transducer-extended text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
    Coming soon{dots}
  </span>
</div>
