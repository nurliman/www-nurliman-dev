import { Accessor, createEffect } from "solid-js";
import { makeTimer } from "@solid-primitives/timer";
import { KeenSliderInstance } from "keen-slider";

export type AutoplayOptions = {
  /** A pause signal to control the autoplay */
  pause?: Accessor<boolean>;

  /** Denotes of the autoplay should pause on drag. */
  pauseOnDrag?: boolean;

  /** Allows for control of duration and easing. */
  animation?: {
    /** Duration for transitioning the slide. */
    duration?: number;

    /** Easing function for the transition animation. */
    easing?: (t: number) => number;
  };
};

/**
 * Provides an autoplay plugin.
 *
 * @example
 * ```ts
 * const [create, { prev, next }] = createSlider();
 * <div use:slider>...</div>
 * ```
 */
const autoplay = (
  /** Interval in milliseconds for switching slides */
  interval = 1000,

  /** Options to customize the autoplay */
  options?: AutoplayOptions,
) => {
  return (slider: KeenSliderInstance) => {
    let dispose: ReturnType<typeof makeTimer>;
    const start = () => {
      dispose = makeTimer(
        () => slider.moveToIdx(slider.track.details.position + 1, true, options?.animation),
        interval,
        setInterval,
      );
    };

    // Pause the slider on drag
    // eslint-disable-next-line no-constant-condition
    if (options?.pauseOnDrag || true) slider.on("dragStarted", () => dispose());

    createEffect(() => (!options?.pause || options?.pause() === false ? start() : dispose()));
  };
};

export default autoplay;
