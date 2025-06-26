<script lang="ts">
  import { Progress } from "$lib/components/ui/progress";

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
      <div class="mb-0.5 flex items-center justify-between">
        <div class="text-sm font-medium">{skill.name}</div>
        <div class="text-xs font-medium text-black/70 dark:text-white/70">
          {skill.value * 100}%
        </div>
      </div>
      <Progress value={skill.value * 100} class="h-2" />
    </li>
  {/each}
</ul>
