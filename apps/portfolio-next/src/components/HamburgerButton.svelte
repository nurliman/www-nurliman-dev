<script lang="ts">
  export let isOpen: boolean;
</script>

<button class="flex h-auto min-h-[3rem] w-12 items-center justify-center border-r" on:click>
  <img src="/assets/menu-close.svg" alt="Close" height="24px" width="24px" class:hidden={!isOpen} />
  <img src="/assets/menu-burger.svg" alt="Menu" height="24px" width="24px" class:hidden={isOpen} />
</button>
