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
      <div class="font-transducer text-foreground mb-2 text-xl font-bold tracking-tight">
        {item.title}
      </div>
      <div class="text-foreground/90 mb-1.5 text-base font-medium">
        {item.institution}
      </div>
      <div class="text-muted-foreground mb-3 text-sm font-medium">
        {item.period}
      </div>
      <div
        class={cn(styles.description, "text-sm md:leading-relaxed")}
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
