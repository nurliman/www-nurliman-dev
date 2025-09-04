<script lang="ts">
  import "bigger-picture/css";
  import ActivityIcon from "@lucide/svelte/icons/activity";
  import AlertTriangleIcon from "@lucide/svelte/icons/alert-triangle";
  import BarChart3Icon from "@lucide/svelte/icons/bar-chart-3";
  import BatteryFullIcon from "@lucide/svelte/icons/battery-full";
  import BuildingIcon from "@lucide/svelte/icons/building";
  import CheckCircle2Icon from "@lucide/svelte/icons/check-circle-2";
  import CodeIcon from "@lucide/svelte/icons/code";
  import CrosshairIcon from "@lucide/svelte/icons/crosshair";
  import DatabaseIcon from "@lucide/svelte/icons/database";
  import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
  import GaugeIcon from "@lucide/svelte/icons/gauge";
  import GithubIcon from "@lucide/svelte/icons/github";
  import HammerIcon from "@lucide/svelte/icons/hammer";
  import MonitorIcon from "@lucide/svelte/icons/monitor";
  import PackageIcon from "@lucide/svelte/icons/package";
  import PrinterIcon from "@lucide/svelte/icons/printer";
  import RefreshCcwIcon from "@lucide/svelte/icons/refresh-ccw";
  import RocketIcon from "@lucide/svelte/icons/rocket";
  import SearchCheckIcon from "@lucide/svelte/icons/search-check";
  import ServerIcon from "@lucide/svelte/icons/server";
  import ShoppingCartIcon from "@lucide/svelte/icons/shopping-cart";
  import SmartphoneIcon from "@lucide/svelte/icons/smartphone";
  import StarIcon from "@lucide/svelte/icons/star";
  import TimerIcon from "@lucide/svelte/icons/timer";
  import TrendingUpIcon from "@lucide/svelte/icons/trending-up";
  import UsersIcon from "@lucide/svelte/icons/users";
  import ZapIcon from "@lucide/svelte/icons/zap";
  import type { Project, ProjectCategory, ProjectMetric } from "@nurliman.dev/data";
  import NeobrutalismBadge from "$lib/components/NeobrutalismBadge.svelte";
  import NeobrutalismButton from "$lib/components/NeobrutalismButton.svelte";
  import * as Card from "$lib/components/ui/card";
  import * as Carousel from "$lib/components/ui/carousel";
  import { cn } from "$lib/utils/shadcn";
  import BiggerPicture, { type BiggerPictureInstance } from "bigger-picture/svelte";
  import snarkdown from "snarkdown";
  import { onMount } from "svelte";
  import ProjectImage from "./ProjectImage.svelte";

  type Props = {
    project: Project;
  };

  let { project }: Props = $props();

  const getCategoryColor = (category: ProjectCategory) => {
    switch (category) {
      case "Web Development":
        return "bg-stone-600";
      case "Mobile Development":
        return "bg-black";
      case "Desktop Application":
        return "bg-slate-600";
      case "Enterprise Software":
        return "bg-teal-600";
      default:
        return "bg-gray-600";
    }
  };

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case "Web Development":
        return CodeIcon;
      case "Mobile Development":
        return SmartphoneIcon;
      case "Desktop Application":
        return MonitorIcon;
      case "Enterprise Software":
        return BuildingIcon;
      default:
        return CodeIcon;
    }
  };

  const getMetricIcon = (iconName: ProjectMetric["iconName"]) => {
    switch (iconName) {
      case "users":
        return UsersIcon;
      case "zap":
        return ZapIcon;
      case "trending-up":
        return TrendingUpIcon;
      case "star":
        return StarIcon;
      case "database":
        return DatabaseIcon;
      case "timer":
        return TimerIcon;
      case "gauge":
        return GaugeIcon;
      case "printer":
        return PrinterIcon;
      case "refresh-ccw":
        return RefreshCcwIcon;
      case "hammer":
        return HammerIcon;
      case "check-circle-2":
        return CheckCircle2Icon;
      case "package":
        return PackageIcon;
      case "server":
        return ServerIcon;
      case "activity":
        return ActivityIcon;
      case "shopping-cart":
        return ShoppingCartIcon;
      case "rocket":
        return RocketIcon;
      case "search-check":
        return SearchCheckIcon;
      case "smartphone":
        return SmartphoneIcon;
      case "crosshair":
        return CrosshairIcon;
      case "battery-full":
        return BatteryFullIcon;
      case "bar-chart-3":
        return BarChart3Icon;
      case "alert-triangle":
        return AlertTriangleIcon;
      default:
        return StarIcon;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  const imageGalleryId = $props.id();

  let bp: BiggerPictureInstance;

  onMount(() => {
    bp = BiggerPicture({
      target: document.body,
    });
  });
</script>

<Card.Root
  class={[
    "!shadow-neobrutalism dark:bg-background",
    "gap-0 space-y-6 sm:space-y-8 lg:space-y-12",
    "overflow-hidden rounded-none pt-0 pb-6 sm:pb-8 lg:pb-12",
    "border-4 border-black dark:border-zinc-800",
  ]}
>
  <!-- Category Header -->
  <div
    class={cn(
      getCategoryColor(project.category),
      "border-b-4 border-black p-3 sm:p-4 dark:border-zinc-800",
    )}
  >
    <div class="sm:spaxe-x-3 flex items-center space-x-2">
      <CategoryIcon class="size-5 text-white sm:size-6" />
      <span class="text-sm font-black tracking-wide text-white sm:text-lg">
        {project.category?.toUpperCase?.()}
      </span>
    </div>
  </div>

  <Card.Header class="space-y-3 p-0 px-4 sm:space-y-4 sm:px-6 lg:px-8">
    <Card.Title class="font-transducer-extended text-xl font-black sm:text-2xl lg:text-3xl">
      {project.title}
    </Card.Title>
    <Card.Description
      class={[
        "text-sm sm:text-base lg:text-lg",
        "leading-relaxed font-medium",
        "text-gray-700 dark:text-gray-300",
      ]}
    >
      {project.summary}
    </Card.Description>
  </Card.Header>

  <Card.Content class="space-y-6 p-0 sm:space-y-8">
    <!-- Image Gallery -->
    {#if project.screenshotUrls?.length}
      <Carousel.Root opts={{ dragFree: true }}>
        <Carousel.Content id={imageGalleryId} class="ml-0 pb-2">
          {#each project.screenshotUrls as screenshotUrl, imgIndex}
            <Carousel.Item
              class={[
                "min-w-0 basis-auto",
                "pl-3 sm:pl-4",
                "first:pl-4 sm:first:pl-6 lg:first:pl-8",
                "last:pr-4 sm:last:pr-6 lg:last:pr-8",
              ]}
            >
              <ProjectImage
                src={screenshotUrl}
                alt="{project.title} screenshot {imgIndex + 1}"
                data-project-image
                onclick={(e) => {
                  if (!bp) return;
                  e.preventDefault?.();
                  bp.open?.({
                    items: document.querySelectorAll(`#${imageGalleryId} [data-project-image]`),
                    el: e.currentTarget!,
                  });
                }}
              />
            </Carousel.Item>
          {/each}
        </Carousel.Content>
      </Carousel.Root>
    {/if}

    <!-- Detailed Description -->
    <div class="px-4 sm:px-6 lg:px-8">
      <div
        class={[
          "border-2 border-black dark:border-zinc-700",
          "bg-gray-100 dark:bg-zinc-800",
          "p-4 sm:p-6",
        ]}
      >
        <p
          class={[
            "text-sm sm:text-base",
            "leading-relaxed font-medium",
            "text-gray-800 dark:text-gray-200",
            "[&_ul]:ml-[15px] [&_ul]:list-disc",
          ]}
        >
          {@html snarkdown(project.description)}
        </p>
      </div>
    </div>

    <!-- Tech Stack -->
    {#if project.technologies?.length}
      <div class="space-y-3 px-4 sm:space-y-4 sm:px-6 lg:px-8">
        <div class="font-transducer-extended text-lg font-black sm:text-xl">TECH STACK</div>
        <div class="flex flex-wrap gap-2 sm:gap-3">
          {#each project.technologies as technology}
            <NeobrutalismBadge
              class={[
                "px-3 py-1.5 sm:px-4 sm:py-2",
                "text-xs font-bold sm:text-sm",
                "dark:border-zinc-700 dark:bg-zinc-800",
              ]}
              variant="neutral"
            >
              {technology}
            </NeobrutalismBadge>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Metrics -->
    {#if project.performanceMetrics?.length}
      <div class="space-y-3 px-4 sm:space-y-4 sm:px-6 lg:px-8">
        <div class="font-transducer-extended text-lg font-black sm:text-xl">KEY METRICS</div>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {#each project.performanceMetrics as metric}
            {@const MetricIcon = getMetricIcon(metric.iconName)}
            <div
              class={[
                "shadow-neobrutalism border-2 border-black bg-white",
                "p-3 text-center sm:p-4",
                "dark:border-zinc-700 dark:bg-zinc-800",
              ]}
            >
              <MetricIcon class="mx-auto mb-2 size-5 text-teal-500 sm:size-6" />
              <div class="text-xl font-black text-black sm:text-2xl dark:text-white">
                {metric.value}
              </div>
              <div
                class={[
                  "text-xs sm:text-sm",
                  "font-bold tracking-wide uppercase",
                  "text-gray-600 dark:text-gray-400",
                ]}
              >
                {metric.label}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Key Features -->
    {#if project.keyFeatures?.length}
      <div class="space-y-3 px-4 sm:space-y-4 sm:px-6 lg:px-8">
        <div class="font-transducer-extended text-lg font-black sm:text-xl">KEY FEATURES</div>
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          {#each project.keyFeatures as feature}
            <div
              class={[
                "flex items-baseline space-x-2 sm:items-center sm:space-x-2.5",
                "border-2 border-teal-500 p-2.5 sm:p-3",
                "bg-teal-50 dark:bg-teal-900/20",
              ]}
            >
              <div class="size-2 flex-shrink-0 bg-teal-500"></div>
              <span class="text-sm font-bold text-gray-800 sm:text-base dark:text-gray-200">
                {feature}
              </span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </Card.Content>

  <Card.Footer
    class={[
      "flex flex-col items-stretch space-y-3 p-0 px-4",
      "sm:flex-row sm:space-y-0 sm:space-x-4 sm:px-6",
      "lg:px-8",
    ]}
  >
    <NeobrutalismButton
      class={[
        "flex-1 border-[3px] py-4 text-base font-extrabold sm:py-6 sm:text-lg",
        project.repositoryUrl ? "cursor-pointer" : "cursor-not-allowed",
      ]}
      disabled={!project.repositoryUrl}
      href={project.repositoryUrl}
      target="_blank"
      variant="zinc"
    >
      <GithubIcon class="mr-2 size-5 stroke-[2.5] sm:mr-3 lg:size-5.5" />
      VIEW CODE
    </NeobrutalismButton>

    <NeobrutalismButton
      class={[
        "flex-1 border-[3px] py-4 text-base font-extrabold sm:py-6 sm:text-lg",
        project.demoUrl ? "cursor-pointer" : "cursor-not-allowed",
      ]}
      disabled={!project.demoUrl}
      href={project.demoUrl}
      target="_blank"
    >
      <ExternalLinkIcon class="mr-2 size-5 stroke-[2.5] sm:mr-3 lg:size-5.5" />
      LIVE DEMO
    </NeobrutalismButton>
  </Card.Footer>
</Card.Root>
