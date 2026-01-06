<script lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements";

  type Props = {
    src: string;
    alt: string;
  } & Omit<SvelteHTMLElements["a"], "href">;

  const { src, alt: imageAlt, class: className, ...props }: Props = $props();

  let imageSrc = $state(src);
  let isLoaded = $state(false);

  let naturalHeight = $state<number>();
  let naturalWidth = $state<number>();
</script>

<a
  href={imageSrc}
  class={[
    "relative inline-block overflow-hidden",
    "h-56 sm:h-64 md:h-72 lg:h-80",
    isLoaded && "border-2 border-black shadow-neobrutalism dark:border-zinc-700",
    isLoaded && "bg-gray-100 dark:bg-gray-800",
    className,
  ]}
  data-img={imageSrc}
  data-alt={imageAlt}
  data-height={naturalHeight}
  data-width={naturalWidth}
  {...props}
>
  <img
    src={imageSrc}
    alt={imageAlt}
    class={[
      "h-full w-auto object-contain object-center",
      "transition-transform duration-300 ease-in-out",
      "block hover:scale-105",
    ]}
    loading="lazy"
    onload={(e) => {
      isLoaded = true;
      naturalHeight = (e.currentTarget as HTMLImageElement)?.naturalHeight;
      naturalWidth = (e.currentTarget as HTMLImageElement)?.naturalWidth;
    }}
    onerror={() => {
      imageSrc = "/assets/undraw_images_of1m.svg";
      isLoaded = true;
    }}
  />
</a>
