import TheButton from "@/components/TheButton";
import { clsx } from "clsx";
import type { Accessor, ComponentProps } from "solid-js";
import { splitProps } from "solid-js";

export type TheHamburgerButtonProps = {
  isSidebarOpen: Accessor<boolean>;
} & ComponentProps<typeof TheButton<"button">>;

export default function TheHamburgerButton(props: TheHamburgerButtonProps) {
  const [localProps, restProps] = splitProps(props, [
    "children",
    "class",
    "classList",
    "isSidebarOpen",
  ]);

  return (
    <TheButton
      {...restProps}
      class={clsx(
        "relative h-auto min-h-[3rem] w-12 flex-center border-r",
        localProps.class,
        localProps.classList,
      )}
    >
      <img
        src="/assets/menu-burger.svg"
        alt="Menu"
        height="28px"
        width="28px"
        loading="lazy"
        class={clsx(
          "absolute-center transition-opacity dark:hidden",
          localProps.isSidebarOpen() ? "opacity-0" : "opacity-100",
        )}
      />
      <img
        src="/assets/menu-close.svg"
        alt="Close"
        height="28px"
        width="28px"
        loading="lazy"
        class={clsx(
          "absolute-center transition-opacity dark:hidden",
          localProps.isSidebarOpen() ? "opacity-100" : "opacity-0",
        )}
      />
      <img
        src="/assets/menu-burger-dark.svg"
        alt="Menu"
        height="28px"
        width="28px"
        loading="lazy"
        class={clsx(
          "absolute-center hidden transition-opacity dark:block",
          localProps.isSidebarOpen() ? "opacity-0" : "opacity-100",
        )}
      />
      <img
        src="/assets/menu-close-dark.svg"
        alt="Close"
        height="28px"
        width="28px"
        loading="lazy"
        class={clsx(
          "absolute-center hidden transition-opacity dark:block",
          localProps.isSidebarOpen() ? "opacity-100" : "opacity-0",
        )}
      />
    </TheButton>
  );
}
