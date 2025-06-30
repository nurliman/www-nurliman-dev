<script lang="ts">
  import "$lib/styles/fonts/transducer/plain.css";
  import "$lib/styles/fonts/transducer/extended.css";
  import "@fontsource/racing-sans-one/latin.css";
  import "@app.css";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  import { dev } from "$app/environment";
  import { page } from "$app/state";
  import TheFooter from "$lib/components/TheFooter.svelte";
  import TheHeader from "$lib/components/TheHeader.svelte";
  import { Toaster } from "$lib/components/ui/sonner";
  import { HEADER_HEIGHT } from "$lib/constants";
  import { ModeWatcher } from "mode-watcher";
  import { ProgressBar } from "sveltekit-progress-bar";

  const title = "Nurliman Diara Aria | Software Engineer";
  const description = "Crafting Digital Experiences with Excellence";
  const canonicalURL = new URL(page.url.pathname, page.url.origin);

  let { children } = $props();

  injectAnalytics({
    mode: dev ? "development" : "production",
    endpoint: dev ? undefined : "/api/v-event",
    scriptSrc: dev ? undefined : "/api/v-event/script.js",
  });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  {#if canonicalURL}
    <link rel="canonical" href={canonicalURL.toString()} />
  {/if}

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://nurliman.dev/assets/og-image.jpg" />
  <meta property="og:title" content={title} />
  <meta property="og:site_name" content={title?.split?.(" | ")?.[0] || title} />
  {#if canonicalURL}
    <meta property="og:url" content={canonicalURL.toString()} />
  {/if}
  {#if description}
    <meta property="og:description" content={description} />
  {/if}

  <!-- Twitter/X -->
  <meta name="twitter:image" content="https://nurliman.dev/assets/og-image.jpg" />
  <meta name="twitter:title" content={title} />
  <meta property="twitter:domain" content={page.url.hostname} />
  {#if canonicalURL}
    <meta property="twitter:url" content={canonicalURL.toString()} />
  {/if}
  {#if description}
    <meta name="twitter:description" content={description} />
  {/if}
</svelte:head>

<ModeWatcher />
<ProgressBar color="#f540cc" settleTime={150} zIndex={9999} />
<Toaster closeButton />
<TheHeader />

<!-- '+ 2' includes the header's 2px bottom border for correct alignment -->
<div class="flex flex-1" style:padding-top={`${HEADER_HEIGHT + 2}px`}>
  {@render children()}
</div>

{#if page.url.pathname !== "/"}
  <TheFooter></TheFooter>
{/if}

<style>
  :global(.svelte-progress-bar) {
    height: 2px !important;
  }
</style>
