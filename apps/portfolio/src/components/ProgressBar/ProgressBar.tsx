import clsx from "clsx";
import styles from "./ProgressBar.module.scss";

type Props = {
  className?: string;
  progress?: number;
};

export default function ProgressBar({ className, progress = 1 }: Props) {
  return (
    <div className={clsx(styles.container, className)}>
      <div style={{ width: progress * 100 + "%" }} className={styles.progress} />
    </div>
  );
}
