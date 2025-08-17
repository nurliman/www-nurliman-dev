<script lang="ts">
  import { Button, type ButtonProps } from "$lib/components/ui/button";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { cn } from "$lib/utils/shadcn";
  import { toggleMode } from "mode-watcher";

  let { class: className, ...restProps }: ButtonProps = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root delayDuration={100}>
    <Tooltip.Trigger>
      {#snippet child({ props })}
        <Button
          {...props}
          {...restProps}
          size="icon"
          variant="ghost"
          class={cn("relative !size-10 cursor-pointer rounded-lg dark:!border", className)}
          onclick={() => toggleMode()}
          aria-label="Toggle theme"
          aria-describedby="theme-switcher-tooltip"
          type="button"
        >
          <img
            src="/assets/moon.svg"
            alt="Moon"
            height="24px"
            width="24px"
            loading="lazy"
            class="absolute-center opacity-100 transition-opacity dark:opacity-0"
            aria-hidden="true"
          />
          <img
            src="/assets/sun.svg"
            alt="Sun"
            height="27px"
            width="27px"
            loading="lazy"
            class="absolute-center opacity-0 transition-opacity dark:opacity-100"
            aria-hidden="true"
          />
        </Button>
      {/snippet}
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p id="theme-switcher-tooltip">Toggle dark/light theme</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
