import NProgress, { type NProgressOptions } from "nprogress";
import type { TransitionBeforePreparationEvent } from "astro:transitions/client";
import { createEffect, createSignal, mergeProps, onCleanup, splitProps } from "solid-js";
import { makeEventListener } from "@solid-primitives/event-listener";
import styles from "./NProgress.module.css";

export type TheNProgressProps = NProgressOptions & {
  height?: number | string;
  color?: string;
  colorDark?: string;
  delay?: number;
  options?: Partial<NProgressOptions>;
  nonce?: string;
  customGlobalCss?: string;
  disableSameRoute?: boolean;
};

/**
 * @param height Height of the progress bar.
 * @param color Color of the progress bar.
 * @param delay Delay of the animation - when page loads faster than the delay time progress bar won't be displayed.
 * @param disableSameRoute If true, progress bar won't be displayed when user travels the same route they're currently on.
 * @param options Options for - NProgress.configure(options).
 * @param customGlobalCss Custom NProgress styles - must be provided as a string that will go inside the <style jsx> tag. Color param won't work as you should set the color yourself inside custom css.
 */
export default function TheNProgress(props: TheNProgressProps) {
  const propsWithDefaults = mergeProps(
    {
      height: "2px",
      color: "#f540cc",
      delay: 0,
      disableSameRoute: false,
      showSpinner: false,
      template: `
        <div class="${styles.bar}" role="bar">
          <div class="${styles.peg}"></div>
        </div>
        <div class="${styles.spinner}" role="spinner">
          <div class="${styles.spinnerIcon}"></div>
        </div>
      `,
    } as const satisfies Partial<TheNProgressProps>,
    props,
  );

  const [localProps, nprogressProps] = splitProps(
    propsWithDefaults,
    ["height", "color", "colorDark", "delay", "nonce", "customGlobalCss", "disableSameRoute"],
    [
      "minimum",
      "template",
      "easing",
      "speed",
      "trickle",
      "trickleSpeed",
      "showSpinner",
      "parent",
      "positionUsing",
      "barSelector",
      "spinnerSelector",
    ],
  );

  const [timer, setTimer] = createSignal<ReturnType<typeof setTimeout>>();
  const [incInterval, setIncInterval] = createSignal<ReturnType<typeof setInterval>>();

  const start = (event: TransitionBeforePreparationEvent) => {
    clearTimeout(timer());
    clearInterval(incInterval());
    if (localProps.disableSameRoute && event.from.pathname === event.to.pathname) return;
    setTimer(setTimeout(() => NProgress.start(), localProps.delay));
    setIncInterval(setInterval(NProgress.inc, 1000));
  };

  const done = () => {
    clearTimeout(timer());
    clearInterval(incInterval());
    NProgress.done();
  };

  createEffect(() => {
    NProgress.configure(nprogressProps);
  });

  onCleanup(() => {
    clearTimeout(timer());
    clearInterval(incInterval());
    NProgress.remove();
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  makeEventListener(document, "astro:before-preparation", start as any, { passive: true });
  makeEventListener(document, "astro:page-load", done, { passive: true });

  return (
    <style
      nonce={localProps.nonce || ""}
      innerHTML={`
        :root {
          --nprogress-color:${localProps.color};
          --nprogress-height:${localProps.height};
        }

        ${localProps.colorDark ? `:root.dark{--nprogress-color:${localProps.colorDark};}` : ""}
      `}
    />
  );
}
