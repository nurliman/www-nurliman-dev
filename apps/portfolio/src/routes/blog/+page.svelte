<script lang="ts">
  import ComingSoon from "$lib/components/ComingSoon.svelte";

  const PAGE_TITLE = "Software Engineering Blog | Nurliman Diara Aria";
  const PAGE_DESCRIPTION =
    "Insights on modern web development, cloud architecture, DevOps practices, and software engineering trends. Practical tutorials and industry analysis.";
  const PAGE_KEYWORDS =
    "software engineering blog, web development tutorials, DevOps insights, cloud architecture, programming tutorials, software development tips, tech blog";
  const PAGE_IMAGE_ALT = "Software Engineering Blog - Nurliman Diara Aria";
  const PAGE_AUTHOR = "Nurliman Diara Aria";
</script>

<svelte:head>
  <title>{PAGE_TITLE}</title>
  <meta name="description" content={PAGE_DESCRIPTION} />
  <meta name="keywords" content={PAGE_KEYWORDS} />
  <meta property="og:title" content={PAGE_TITLE} />
  <meta property="og:description" content={PAGE_DESCRIPTION} />
  <meta property="og:image:alt" content={PAGE_IMAGE_ALT} />
  <meta name="twitter:title" content={PAGE_TITLE} />
  <meta name="twitter:description" content={PAGE_DESCRIPTION} />
  <meta name="twitter:image:alt" content={PAGE_IMAGE_ALT} />
  <meta property="og:article:author" content={PAGE_AUTHOR} />
</svelte:head>

<main class="flex-center flex-1">
  <ComingSoon></ComingSoon>
</main>
