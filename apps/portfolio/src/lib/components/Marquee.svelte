<script lang="ts">
  import { cn } from "$lib/utils/shadcn";
  import toPairs from "lodash-es/toPairs";
  import { onMount, type Snippet } from "svelte";
  import styles from "./Marquee.module.css";

  type Props = {
    vertical?: boolean;
    direction?: "normal" | "reverse";
    duration?: number;
    delay?: number;
    loop?: number;
    clone?: boolean;
    gradient?: boolean;
    gradientColor?: [number, number, number];
    gradientWidth?: string;
    gradientLength?: string;
    pauseOnHover?: boolean;
    pauseOnClick?: boolean;
    pause?: boolean;
    onComplete?: () => void;
    onLoopComplete?: () => void;
    onResume?: () => void;
    onPause?: () => void;
    children: Snippet;
  };

  let {
    vertical = false,
    direction = "normal",
    duration = 20,
    delay = 0,
    loop = 0,
    clone = false,
    gradient = false,
    gradientColor = [255, 255, 255],
    gradientWidth,
    gradientLength: gradientLengthProp,
    pauseOnHover = false,
    pauseOnClick = false,
    pause = false,
    onComplete,
    onLoopComplete,
    onResume,
    onPause,
    children,
  }: Props = $props();

  let cloneAmount = $state(0);
  let minWidth = $state("100%");
  let minHeight = $state("100%");
  let componentKey = $state(0);
  let verticalAnimationPause = $state(false);
  let containerWidth = $state(0);
  let contentWidth = $state(0);
  let containerHeight = $state(0);
  let contentHeight = $state(0);
  let loopCounter = $state(0);
  let gradientLength = $state("200px");
  let ready = $state(false);

  let marqueeContent: HTMLDivElement;
  let marqueeOverlayContainer: HTMLDivElement;
  let cloneCheckInterval: ReturnType<typeof setInterval>;

  const forcesUpdate = async () => {
    await checkForClone();
    componentKey++;
  };

  const checkForClone = async () => {
    if (vertical) {
      // pause the animation to prevent flickering
      verticalAnimationPause = true;
    }

    cloneCheckInterval = setInterval(() => {
      minWidth = "0%";
      minHeight = "0%";

      if (!marqueeContent || !marqueeOverlayContainer) {
        minWidth = "100%";
        minHeight = "100%";
        return 0;
      }

      if (vertical && marqueeContent.clientHeight && marqueeOverlayContainer.clientHeight) {
        contentHeight = marqueeContent.clientHeight;
        containerHeight = marqueeOverlayContainer.clientHeight;

        const localCloneAmount = Math.ceil(containerHeight / contentHeight);
        cloneAmount = Number.isFinite(localCloneAmount) ? localCloneAmount : 0;

        // resume the animation
        verticalAnimationPause = false;
        return cloneAmount;
      }

      if (!vertical && marqueeContent.clientWidth && marqueeOverlayContainer.clientWidth) {
        contentWidth = marqueeContent.clientWidth;
        containerWidth = marqueeOverlayContainer.clientWidth;

        const localCloneAmount = Math.ceil(containerWidth / contentWidth);
        cloneAmount = Number.isFinite(localCloneAmount) ? localCloneAmount : 0;
        return cloneAmount;
      }

      minWidth = "100%";
      minHeight = "100%";
      return 0;
    }, 100);
  };

  // Effects for content/container width changes
  $effect(() => {
    if (clone && contentWidth > 0) {
      forcesUpdate();
    }
  });

  $effect(() => {
    if (clone && containerWidth > 0) {
      forcesUpdate();
    }
  });

  // Effect for pause state changes
  $effect(() => {
    if (pause) {
      onPause?.();
    } else {
      onResume?.();
    }
  });

  const hoverStarted = () => {
    if (pauseOnHover) onPause?.();
  };

  const hoverEnded = () => {
    if (pauseOnHover) onResume?.();
  };

  const mouseDown = () => {
    if (pauseOnClick) onPause?.();
  };

  const mouseUp = () => {
    if (pauseOnClick) onResume?.();
  };

  const currentStyle = $derived.by(() => {
    const cssVariables = {
      "--marquee-duration": `${duration}s`,
      "--marquee-delay": `${delay}s`,
      "--marquee-direction": direction,
      "--marquee-pause-on-hover": pauseOnHover ? "paused" : "running",
      "--marquee-pause-on-click": pauseOnClick ? "paused" : "running",
      "--marquee-pause-animation":
        (vertical && verticalAnimationPause) || pause ? "paused" : "running",
      "--marquee-loops": loop === 0 ? "infinite" : `${loop}`,
      "--marquee-gradient-color": `rgba(${gradientColor[0]},${gradientColor[1]},${gradientColor[2]},1),rgba(${gradientColor[0]},${gradientColor[1]},${gradientColor[2]},0)`,
      "--marquee-gradient-length": gradientLength,
      "--marquee-min-width": minWidth,
      "--marquee-min-height": minHeight,
    };

    const animationStyles = {
      "--marquee-orientation": vertical ? styles.scrollY : styles.scrollX,
      orientation: "horizontal",
    };

    return {
      ...cssVariables,
      ...animationStyles,
    };
  });

  const showGradient = $derived.by(() => !!gradient);

  const setupMarquee = async () => {
    if (vertical) {
      minHeight = "100%";
      minWidth = "auto";
    } else {
      minHeight = "auto";
      minWidth = "100%";
    }

    // Deprecate the gradientWidth prop in favor of gradientLength
    if (gradient) {
      if (gradientWidth) {
        console.warn(
          "The `gradientWidth` prop has been deprecated and will be removed in a future release. Please use `gradientLength` instead.",
        );
        gradientLength = gradientWidth;
      } else if (gradientLengthProp) {
        gradientLength = gradientLengthProp;
      }
    }

    if (clone) {
      await checkForClone();
      forcesUpdate();
      ready = true;
    } else {
      ready = true;
    }
  };

  onMount(() => {
    setupMarquee();

    const loopInterval = setInterval(() => {
      loopCounter++;

      if (loop !== 0 && loopCounter === loop) {
        onComplete?.();
        clearInterval(loopInterval);
      }

      onLoopComplete?.();
    }, duration * 1000);

    return () => {
      clearInterval(loopInterval);
      clearInterval(cloneCheckInterval);
    };
  });
</script>

{#if ready}
  {#key componentKey}
    <div
      class={cn(styles.container, vertical ? styles.vertical : styles.horizontal)}
      style={toPairs(currentStyle)
        .map(([key, value]) => `${key}: ${value}`)
        .join("; ")}
      onmouseenter={hoverStarted}
      onmouseleave={hoverEnded}
      onmousedown={mouseDown}
      onmouseup={mouseUp}
      role="presentation"
    >
      <div
        aria-hidden="true"
        class={styles.transparentOverlay}
        bind:this={marqueeOverlayContainer}
      ></div>

      {#if showGradient}
        <div
          aria-hidden="true"
          class={cn(styles.overlay, vertical ? styles.vertical : styles.horizontal)}
        ></div>
      {/if}

      <div class={styles.marquee} bind:this={marqueeContent}>
        {@render children?.()}
      </div>

      <div class={styles.marquee} aria-hidden="true">
        {@render children?.()}
      </div>

      {#each Array(cloneAmount).fill(null) as _}
        <div aria-hidden="true" class={cn(styles.marquee, "cloned")}>
          {@render children?.()}
        </div>
      {/each}
    </div>
  {/key}
{/if}
