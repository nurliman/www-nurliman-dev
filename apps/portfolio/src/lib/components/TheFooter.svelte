<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { socials } from "$lib/data/socials";
  import { onMount } from "svelte";

  let currentYear = $state(new Date().getFullYear());

  onMount(() => {
    currentYear = new Date().getFullYear();
  });
</script>

<footer class="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
  <!-- Main Content -->
  <div class="relative px-6 py-16 md:py-20">
    <div class="container mx-auto w-full">
      <!-- Top Section -->
      <div class="mb-12 text-center">
        <Button
          href="/"
          variant="link"
          class="font-racing-sans mb-4 !p-0 text-4xl font-bold text-white"
        >
          nurliman.
        </Button>
        <p class="mx-auto max-w-md text-sm leading-relaxed text-zinc-400 md:text-base">
          Reach out for business partnerships, project work, and professional opportunities.
        </p>
      </div>

      <!-- Social Links -->
      <div class="mb-12 flex justify-center">
        <div class="flex items-center space-x-6 border border-white/5 bg-black/20 p-4">
          {#each socials as social}
            <Tooltip.Provider>
              <Tooltip.Root delayDuration={100}>
                <Tooltip.Trigger>
                  {#snippet child({ props })}
                    <a
                      {...props}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      class={[
                        "group flex-center relative size-12",
                        "border border-white/10",
                        "bg-gradient-to-br from-white/5 to-white/0",
                        "transition-all duration-300",
                        "hover:-translate-y-1 hover:scale-110 hover:border-white/20 hover:bg-white/10",
                      ]}
                    >
                      <!-- Icon -->
                      <img
                        src={social.iconDarkUrl}
                        alt={social.name}
                        class={[
                          "size-5 opacity-80",
                          "transition-all duration-300",
                          "group-hover:scale-110 group-hover:opacity-100",
                        ]}
                      />

                      <!-- Hover Glow Effect -->
                      <div
                        class={[
                          "absolute inset-0 -z-10",
                          "bg-gradient-to-br from-blue-500/20 to-purple-600/20",
                          "opacity-0 blur-md",
                          "transition-opacity duration-300 group-hover:opacity-100",
                        ]}
                      ></div>
                    </a>
                  {/snippet}
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <p>{social.name}</p>
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          {/each}
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class={[
          "relative flex flex-col items-center justify-between",
          "border-t border-white/5 pt-8",
          "max-md:space-y-6",
          "md:flex-row md:space-x-6",
        ]}
      >
        <!-- Copyright -->
        <div class="flex items-center text-sm text-zinc-400">
          <span>© {currentYear} All rights reserved.</span>
        </div>

        <!-- Made with love indicator -->
        <div
          class={[
            "flex items-center space-x-2",
            "text-xs text-zinc-500",
            "md:absolute md:left-1/2 md:-translate-x-1/2",
          ]}
        >
          <span>Made with</span>
          <div class="relative">
            <span class="animate-pulse text-red-400">♥</span>
            <div class="absolute inset-0 animate-ping text-red-400 opacity-75">♥</div>
          </div>
          <span>and lots of coffee</span>
        </div>

        <!-- Status Indicator -->
        <div class="flex-center space-x-2 border border-green-500 bg-green-500/10 px-3 py-1">
          <div class="h-2 w-2 animate-pulse bg-green-400"></div>
          <span class="text-xs font-medium text-green-400">Available for work</span>
        </div>
      </div>
    </div>
  </div>
</footer>
