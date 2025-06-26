<script lang="ts">
  import { cn } from "$lib/utils/shadcn";
  import snarkdown from "snarkdown";
  import styles from "./Timeline.module.css";
  import type { TimelineItem } from "./types";

  type Props = {
    data: Array<TimelineItem> | ReadonlyArray<TimelineItem>;
  };

  let { data }: Props = $props();
</script>

<ul class="flex flex-col">
  {#each data as item (item.period + item.institution + item.title)}
    <li class={styles.timeline}>
      <div class="h-1"></div>
      <div class="mb-px text-sm font-semibold text-teal-700 dark:text-zinc-300">
        {item.period}
      </div>
      <div class="mb-1 text-sm text-zinc-700 dark:text-zinc-400">{item.institution}</div>
      <div class="font-transducer mb-1.5 text-lg font-bold">{item.title}</div>
      <div
        class={cn(styles.description, "text-xs md:text-sm")}
        role="region"
        aria-label="Description"
      >
        {@html snarkdown(item.description)}
      </div>
      <div class={styles.line}>
        <div class={styles.bullet}></div>
      </div>
    </li>
  {/each}
</ul>
