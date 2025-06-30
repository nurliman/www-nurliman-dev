<script lang="ts">
  import NeobrutalismProgress from "$lib/components/NeobrutalismProgress.svelte";

  export type Skill = {
    name: string;
    value: number;
  };

  type Props = {
    data: Array<Skill> | ReadonlyArray<Skill>;
  };

  let { data }: Props = $props();
</script>

<ul class="flex flex-col">
  {#each data as skill (skill.name + skill.value)}
    <li class="mb-3 flex flex-col">
      <div class="mb-1 flex items-center justify-between">
        <div class="text-sm font-medium">{skill.name}</div>
        <div class="text-xs font-medium text-black/70 dark:text-white/70">
          {skill.value * 100}%
        </div>
      </div>
      <NeobrutalismProgress value={skill.value * 100} class="h-3" />
    </li>
  {/each}
</ul>
