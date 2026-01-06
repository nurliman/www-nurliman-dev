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
      <div class="mb-2 font-transducer text-xl font-bold tracking-tight text-foreground">
        {item.title}
      </div>
      <div class="mb-1.5 text-base font-medium text-foreground/90">
        {item.institution}
      </div>
      <div class="mb-3 text-sm font-medium text-muted-foreground">
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
