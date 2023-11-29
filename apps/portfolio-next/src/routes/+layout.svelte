<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import "@/fonts/transducer/plain.css";
  import "@/fonts/transducer/extended.css";
  import "@fontsource/racing-sans-one/latin.css";
  import "@/app.css";
</script>

<svelte:head>
  <title>
    Nurliman Diara Aria | Web Developer Portfolio - Crafting Digital Experiences with Excellence
  </title>
  <meta
    name="description"
    content="Explore the dynamic world of web development through the portfolio of Nurliman Diara Aria. As a skilled web developer, I specialize in creating innovative and user-centric digital experiences. Discover my diverse projects, showcasing expertise in front-end and back-end development, responsive design, and seamless functionality. Elevate your online presence with cutting-edge web solutions. Dive into the realm of possibilities at Nurliman Diara Aria's portfolio – where code meets creativity."
  />
</svelte:head>

<Header />

<main class="flex h-full pt-[50px] md:pt-14">
  <slot />
</main>

<footer></footer>
