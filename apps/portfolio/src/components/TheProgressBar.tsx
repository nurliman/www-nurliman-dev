import { clsx } from "clsx";
import { type ComponentProps, splitProps } from "solid-js";
import styles from "./TheProgressBar.module.css";

export type TheProgressBarProps = {
  progress: number;
} & ComponentProps<"div">;

export default function TheProgressBar(props: TheProgressBarProps) {
  const [localProps, restProps] = splitProps(props, ["class", "classList", "progress"]);

  return (
    <div
      class={clsx(styles.progress, localProps.class, localProps.classList)}
      style={{ "--progress": `${localProps.progress * 100}%` }}
      {...restProps}
    />
  );
}
