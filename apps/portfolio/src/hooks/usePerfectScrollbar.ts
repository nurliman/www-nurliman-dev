import { MutableRefObject, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import PerfectScrollbar from "perfect-scrollbar";

export const usePerfectScrollbar = <T extends HTMLElement>(
  options?: PerfectScrollbar.Options,
): [MutableRefObject<T>, PerfectScrollbar] => {
  const router = useRouter();
  const containerRef = useRef<T>();
  const perfectScrollbar = useRef<PerfectScrollbar>();

  const psUpdate = useCallback(() => {
    if (typeof perfectScrollbar.current?.update === "function") {
      perfectScrollbar.current.update();
    }
  }, [perfectScrollbar]);

  useEffect(() => {
    if (containerRef.current) {
      perfectScrollbar.current = new PerfectScrollbar(containerRef.current, options);
      window.addEventListener("resize", psUpdate);
      router.events.on("routeChangeComplete", psUpdate);
    }

    return () => {
      if (typeof perfectScrollbar.current?.destroy === "function") {
        perfectScrollbar.current.destroy();
      }

      perfectScrollbar.current = null;
      window.removeEventListener("resize", psUpdate);
      router.events.off("routeChangeComplete", psUpdate);
    };
  }, []);

  return [containerRef, perfectScrollbar.current];
};
