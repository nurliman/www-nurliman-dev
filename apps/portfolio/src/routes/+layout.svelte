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

  // Layout metadata constants
  const LAYOUT_TITLE = "Nurliman Diara Aria | Full-Stack Developer & DevOps Engineer";
  const LAYOUT_DESCRIPTION =
    "Full-stack developer specializing in modern web applications, cloud infrastructure, and DevOps. Expert in JavaScript/TypeScript, React, Node.js, and Google Cloud Platform.";
  const SITE_NAME = "Nurliman Diara Aria";
  const OG_IMAGE_URL = "https://nurliman.dev/assets/og-image.jpg";
  const THEME_COLOR = "#23a094";

  const canonicalURL = $derived(new URL(page.url.pathname, page.url.origin));

  let { children } = $props();

  injectAnalytics({
    mode: dev ? "development" : "production",
    endpoint: dev ? undefined : "/api/v-event",
    scriptSrc: dev ? undefined : "/api/v-event/script.js",
  });
</script>

<svelte:head>
  <!-- Basic fallback metadata - can be overridden by individual pages -->
  <title>{LAYOUT_TITLE}</title>
  <meta name="description" content={LAYOUT_DESCRIPTION} />

  <link rel="canonical" href={canonicalURL.toString()} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalURL.toString()} />
  <meta property="og:title" content={LAYOUT_TITLE} />
  <meta property="og:description" content={LAYOUT_DESCRIPTION} />
  <meta property="og:image" content={OG_IMAGE_URL} />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter / X -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={canonicalURL.toString()} />
  <meta property="twitter:title" content={LAYOUT_TITLE} />
  <meta property="twitter:description" content={LAYOUT_DESCRIPTION} />
  <meta property="twitter:image" content={OG_IMAGE_URL} />
  <meta property="twitter:domain" content={page.url.hostname} />

  <!-- Additional SEO Meta Tags -->
  <meta name="theme-color" content={THEME_COLOR} />
  <meta name="msapplication-TileColor" content={THEME_COLOR} />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content={SITE_NAME} />

  <!-- Structured Data -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Nurliman Diara Aria",
      "jobTitle": "Full-Stack Developer & DevOps Engineer",
      "description": "Full-stack developer specializing in modern web applications, cloud infrastructure, and DevOps. Expert in JavaScript/TypeScript, React, Node.js, and Google Cloud Platform.",
      "url": "https://nurliman.dev",
      "sameAs": ["https://github.com/nurliman", "https://linkedin.com/in/nurliman"],
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ID"
      },
      "knowsAbout": [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Google Cloud Platform",
        "DevOps",
        "Web Development",
        "Cloud Computing"
      ]
    }
  </script>
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
