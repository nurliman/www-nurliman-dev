<script lang="ts">
  export let isOpen: boolean;
</script>

<button class="flex-center the-white-button relative h-auto min-h-[3rem] w-12 border-r" on:click>
  <img
    src="/assets/menu-burger.svg"
    alt="Menu"
    height="28px"
    width="28px"
    class="absolute-center transition-opacity"
    class:opacity-0={isOpen}
    class:opacity-100={!isOpen}
  />
  <img
    src="/assets/menu-close.svg"
    alt="Close"
    height="28px"
    width="28px"
    class="absolute-center transition-opacity"
    class:opacity-0={!isOpen}
    class:opacity-100={isOpen}
  />
</button>
