<script lang="ts">
  type Theme = "light" | "dark";
  let currentTheme: Theme = "light";

  const switchTheme = () => {
    if (currentTheme === "light") {
      currentTheme = "dark";
    } else {
      currentTheme = "light";
    }
  };
</script>

<button class="the-white-button relative mr-2 h-10 w-10 rounded-lg" on:click={switchTheme}>
  <img
    src="/assets/moon.svg"
    alt="Moon"
    height="24px"
    width="24px"
    class="absolute-center transition-opacity"
    class:opacity-0={currentTheme === "dark"}
    class:opacity-100={currentTheme !== "dark"}
  />
  <img
    src="/assets/sun.svg"
    alt="Sun"
    height="26px"
    width="26px"
    class="absolute-center transition-opacity"
    class:opacity-0={currentTheme === "light"}
    class:opacity-100={currentTheme !== "light"}
  />
</button>
