<script lang="ts">
  export let isOpen: boolean;
</script>

<button class="flex-center relative h-auto min-h-[3rem] w-12 border-r" on:click>
  <img
    src="/assets/menu-burger.svg"
    alt="Menu"
    height="24px"
    width="24px"
    class="absolute-center transition-opacity"
    class:opacity-0={isOpen}
    class:opacity-100={!isOpen}
  />
  <img
    src="/assets/menu-close.svg"
    alt="Close"
    height="24px"
    width="24px"
    class="absolute-center transition-opacity"
    class:opacity-0={!isOpen}
    class:opacity-100={isOpen}
  />
</button>
