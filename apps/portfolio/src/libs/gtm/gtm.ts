import { getWindow } from "ssr-window";

declare global {
  interface Window {
    dataLayer?: Array<any>;
  }
}

export function gtmPush(...params: any[]) {
  const window = getWindow();

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(...params);
  }
}

export function gtmPageView(url: string) {
  gtmPush({
    event: "pageview",
    page: url,
  });
}
