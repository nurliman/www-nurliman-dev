import isCallable from "is-callable";
import { onCleanup, onMount, splitProps } from "solid-js";
import type { ComponentProps } from "solid-js";
import type { RenderParameters } from "turnstile-types";
import type { CamelCasedProperties } from "type-fest";

declare global {
  interface Window {
    onloadTurnstileCallback?: () => void;
  }
}

export type TurnstileRef = {
  reset: () => void;
};

export type TurnstileBaseProps = CamelCasedProperties<
  Pick<
    RenderParameters,
    | "sitekey"
    | "theme"
    | "language"
    | "size"
    | "appearance"
    | "retry"
    | "retry-interval"
    | "refresh-expired"
  >
> & {
  // biome-ignore lint/suspicious/noExplicitAny: don't know what type this is
  reset?: any;
  ref?: TurnstileRef | ((v: TurnstileRef) => void);
  onVerify: (token: string) => void;
  onLoad?: (widgetId: string) => void;
  onError?: RenderParameters["error-callback"];
  onExpire?: RenderParameters["expired-callback"];
  onTimeout?: RenderParameters["timeout-callback"];
  onUnsupported?: RenderParameters["unsupported-callback"];
};

export type TurnstileProps = TurnstileBaseProps &
  Omit<ComponentProps<"div">, keyof TurnstileBaseProps>;

const SCRIPT_ID = "turnstileScript";

export default function Turnstile(props: TurnstileProps) {
  const [localProps, restProps] = splitProps(props, [
    "sitekey",
    "theme",
    "language",
    "size",
    "appearance",
    "retry",
    "retryInterval",
    "refreshExpired",
    "reset",
    "ref",
    "onVerify",
    "onLoad",
    "onError",
    "onExpire",
    "onTimeout",
    "onUnsupported",
  ]);

  const turnstile = () => window.turnstile;
  let element: HTMLDivElement | undefined;

  const ready = () => {
    if (!element) return;
    const id = turnstile().render(element, {
      sitekey: localProps.sitekey,
      theme: localProps.theme,
      language: localProps.language,
      size: localProps.size,
      appearance: localProps.appearance,
      retry: localProps.retry,
      callback(token) {
        localProps.onVerify?.(token);
      },
      "expired-callback": () => localProps.onExpire?.(),
      "error-callback": (errorCode) => localProps.onError?.(errorCode),
      "timeout-callback": () => localProps.onTimeout?.(),
      "unsupported-callback": () => localProps.onUnsupported?.(),
      "retry-interval": localProps.retryInterval,
      "refresh-expired": localProps.refreshExpired,
    });
    localProps.onLoad?.(id);

    if (!isCallable(localProps?.ref)) return;

    localProps.ref({
      reset: () => turnstile().reset(id),
    });
  };

  onMount(() => {
    window.onloadTurnstileCallback = ready;

    if (document.getElementById(SCRIPT_ID)) return ready();
    const scriptEl = document.createElement("script");
    scriptEl.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback";
    scriptEl.id = SCRIPT_ID;
    scriptEl.async = true;
    scriptEl.defer = true;
    document.body.appendChild(scriptEl);

    onCleanup(() => {
      document.getElementById(SCRIPT_ID)?.remove?.();
      window.onloadTurnstileCallback = undefined;
      element && turnstile()?.remove?.(element);
    });
  });

  return <div {...restProps} ref={element} />;
}
