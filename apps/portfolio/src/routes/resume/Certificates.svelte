<script lang="ts">
  import * as Card from "$lib/components/ui/card";

  type Certificate = {
    name: string;
    organization: {
      name: string;
      logoUrl: string;
      logoDarkUrl?: string;
    };
    date: string;
    credential: {
      id: string;
      url: string;
    };
  };

  type Props = {
    data: Array<Certificate> | ReadonlyArray<Certificate>;
  };

  let { data }: Props = $props();
</script>

<ul class="flex flex-col space-y-4">
  {#each data as cert (cert.name + cert.date + cert.credential?.id)}
    <li class="p-0">
      <Card.Root class="min-h-28 flex-row gap-0 overflow-hidden p-0">
        <Card.Content class="flex size-full flex-row items-stretch gap-0 p-0">
          <div class="flex-center min-h-28 min-w-28 border-r bg-zinc-100 dark:bg-zinc-800">
            <img
              src={cert.organization.logoUrl}
              alt={cert.organization.name + " logo"}
              loading="lazy"
              class="h-10 w-10 dark:hidden"
            />
            <img
              src={cert.organization.logoDarkUrl}
              alt={cert.organization.name + " dark logo"}
              loading="lazy"
              class="hidden h-10 w-10 dark:block"
            />
          </div>
          <div class="flex w-full flex-col space-y-2 overflow-hidden p-5 shadow-lg">
            <div class="font-transducer-extended text-sm font-semibold">
              {cert.name}
            </div>
            {#if cert.credential}
              <div class="text-xs font-medium text-zinc-700 dark:text-zinc-400">
                {"Credential: "}
                <a
                  href={cert.credential.url}
                  target="_blank"
                  class={[
                    "underline underline-offset-2",
                    "transition-colors",
                    "hover:text-black dark:hover:text-zinc-100",
                  ]}
                >
                  {cert.credential.id}
                </a>
              </div>
            {/if}
            {#if cert.date}
              <div class="text-xs text-zinc-700 dark:text-zinc-400">{cert.date}</div>
            {/if}
          </div>
        </Card.Content>
      </Card.Root>
    </li>
  {/each}
</ul>
