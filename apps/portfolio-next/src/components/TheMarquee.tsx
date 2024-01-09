import { clsx } from "clsx";
import {
  For,
  Show,
  createEffect,
  createMemo,
  createSignal,
  mergeProps,
  on,
  onCleanup,
  onMount,
} from "solid-js";
import { Rerun } from "@solid-primitives/keyed";
import styles from "./TheMarquee.module.css";

export type TheMarqueeProps = {
  vertical?: boolean;
  direction?: "normal" | "reverse";
  duration?: number;
  delay?: number;
  loop?: number;
  clone?: boolean;
  gradient?: boolean;
  gradientColor?: any;
  gradientWidth?: string;
  gradientLength?: string;
  pauseOnHover?: boolean;
  pauseOnClick?: boolean;
  pause?: boolean;
  onComplete?: () => void;
  onLoopComplete?: () => void;
  onResume?: () => void;
  onPause?: () => void;
  children?: any;
};

export default function TheMarquee(originalProps: TheMarqueeProps) {
  const props = mergeProps(
    {
      vertical: false,
      direction: "normal",
      duration: 20,
      delay: 0,
      loop: 0,
      clone: false,
      gradient: false,
      gradientColor: [255, 255, 255],
      pauseOnHover: false,
      pauseOnClick: false,
      pause: false,
    } as const,
    originalProps,
  );

  const [cloneAmount, setCloneAmount] = createSignal(0);
  const [minWidth, setMinWidth] = createSignal("100%");
  const [minHeight, setMinHeight] = createSignal("100%");
  const [componentKey, setComponentKey] = createSignal(0);
  const [verticalAnimationPause, setVerticalAnimationPause] = createSignal(false);
  const [containerWidth, setContainerWidth] = createSignal(0);
  const [contentWidth, setContentWidth] = createSignal(0);
  const [containerHeight, setContainerHeight] = createSignal(0);
  const [contentHeight, setContentHeight] = createSignal(0);
  const [loopCounter, setLoopCounter] = createSignal(0);
  const [gradientLength, setGradientLength] = createSignal("200px");
  const [ready, setReady] = createSignal(false);

  const cloneAmountArr = createMemo(() => [...Array(cloneAmount()).keys()]);

  let marqueeContent: HTMLDivElement | undefined;
  let marqueeOverlayContainer: HTMLDivElement | undefined;

  const ForcesUpdate = async () => {
    await checkForClone();

    setComponentKey((value) => value++);
  };

  const checkForClone = async () => {
    if (props.vertical) {
      // pause the animation to prevent flickering
      setVerticalAnimationPause(true);
    }

    setInterval(() => {
      setMinWidth("0%");
      setMinHeight("0%");

      if (!marqueeContent || !marqueeOverlayContainer) {
        setMinWidth("100%");
        setMinHeight("100%");
        return 0;
      }

      if (
        props.vertical &&
        "clientHeight" in marqueeContent &&
        "clientHeight" in marqueeOverlayContainer
      ) {
        setContentHeight(marqueeContent.clientHeight);
        setContainerHeight(marqueeOverlayContainer.clientHeight);

        const localCloneAmount = Math.ceil(containerHeight() / contentHeight());

        setCloneAmount(isFinite(localCloneAmount) ? localCloneAmount : 0);

        // resume the animation
        setVerticalAnimationPause(false);

        return cloneAmount();
      } else if (
        !props.vertical &&
        "clientWidth" in marqueeContent &&
        "clientWidth" in marqueeOverlayContainer
      ) {
        setContentWidth(marqueeContent.clientWidth);
        setContainerWidth(marqueeOverlayContainer.clientWidth);

        const localCloneAmount = Math.ceil(containerWidth() / contentWidth());

        setCloneAmount(isFinite(localCloneAmount) ? localCloneAmount : 0);

        return cloneAmount();
      } else {
        setMinWidth("100%");
        setMinHeight("100%");
        return 0;
      }
    }, 100);
  };

  createEffect(
    on(contentWidth, () => {
      if (props.clone) {
        ForcesUpdate();
      }
    }),
  );

  createEffect(
    on(containerWidth, () => {
      if (props.clone) {
        ForcesUpdate();
      }
    }),
  );

  // watch pauseAnimation for emitting events
  createEffect(
    on(
      () => props.pause,
      (newVal, oldVal) => {
        if (newVal !== oldVal) {
          if (newVal) {
            props.onResume?.();
          } else {
            props.onPause?.();
          }
        }
      },
      {
        defer: true,
      },
    ),
  );

  const hoverStarted = () => {
    props.pauseOnHover && props.onPause?.();
  };

  const hoverEnded = () => {
    props.pauseOnHover && props.onResume?.();
  };

  const mouseDown = () => {
    props.pauseOnClick && props.onPause?.();
  };

  const mouseUp = () => {
    props.pauseOnClick && props.onResume?.();
  };

  const getCurrentStyle = createMemo(() => {
    const cssVariables = {
      "--marquee-duration": `${props.duration}s`,
      "--marquee-delay": `${props.delay}s`,
      "--marquee-direction": `${props.direction}`,
      "--marquee-pause-on-hover": `${props.pauseOnHover ? "paused" : "running"}`,
      "--marquee-pause-on-click": `${props.pauseOnClick ? "paused" : "running"}`,
      "--marquee-pause-animation": `${
        (props.vertical && verticalAnimationPause()) || props.pause ? "paused" : "running"
      }`,
      "--marquee-loops": `${props.loop === 0 ? "infinite" : props.loop}`,
      "--marquee-gradient-color": `rgba(${props.gradientColor[0]}, ${props.gradientColor[1]}, ${props.gradientColor[2]}, 1), rgba(${props.gradientColor[0]}, ${props.gradientColor[1]}, ${props.gradientColor[2]}, 0)`,
      "--marquee-gradient-length": `${gradientLength()}`,
      "--marquee-min-width": `${minWidth()}`,
      "--marquee-min-height": `${minHeight()}`,
    };

    const animationStyles = {
      "--marquee-orientation": styles.scrollX,
      orientation: "horizontal",
    };

    if (props.vertical) {
      animationStyles["--marquee-orientation"] = styles.scrollY;
    }

    const currentStyles = {
      ...cssVariables,
      ...animationStyles,
    };

    return currentStyles;
  });

  const showGradient = createMemo(() => {
    if (props.gradient) {
      return true;
    }
    return false;
  });

  const setupMarquee = async () => {
    if (props.vertical) {
      setMinHeight("100%");
      setMinWidth("auto");
    } else {
      setMinHeight("auto");
      setMinWidth("100%");
    }

    // Deprecate the gradientWidth prop in favor of gradientLength
    if (props.gradient) {
      if (props.gradientWidth) {
        console.warn(
          "The `gradientWidth` prop has been deprecated and will be removed in a future release. Please use `gradientLength` instead.",
        );

        setGradientLength(props.gradientWidth);
      } else if (props.gradientLength) {
        setGradientLength(props.gradientLength);
      }
    }

    if (props.clone) {
      await checkForClone();
      ForcesUpdate();
      setReady(true);
    } else {
      setReady(true);
    }
  };

  onMount(() => {
    setupMarquee();

    const loopInterval = setInterval(() => {
      setLoopCounter((value) => value++);

      if (props.loop !== 0 && loopCounter() === props.loop) {
        props.onComplete?.();
        clearInterval(loopInterval);
      }

      props.onLoopComplete?.();

      // Converting the duration into milliseconds here
    }, props.duration * 1000);

    onCleanup(() => {
      clearInterval(loopInterval);
    });
  });

  return (
    <Rerun on={componentKey()}>
      <Show when={ready()}>
        <div
          class={clsx(styles.container, props.vertical ? styles.vertical : styles.horizontal)}
          style={getCurrentStyle()}
          onMouseEnter={hoverStarted}
          onMouseLeave={hoverEnded}
          onMouseDown={mouseDown}
          onMouseUp={mouseUp}
        >
          <div class={styles.transparentOverlay} ref={marqueeOverlayContainer} aria-hidden="true" />
          <Show when={showGradient()}>
            <div
              aria-hidden="true"
              class={clsx(styles.overlay, props.vertical ? styles.vertical : styles.horizontal)}
            />
          </Show>
          <div class={styles.marquee} ref={marqueeContent}>
            {props.children}
          </div>
          <div class={styles.marquee} aria-hidden="true">
            {props.children}
          </div>

          <For each={cloneAmountArr()}>
            {() => (
              <div aria-hidden="true" class={clsx(styles.marquee, "cloned")}>
                {props.children}
              </div>
            )}
          </For>
        </div>
      </Show>
    </Rerun>
  );
}
