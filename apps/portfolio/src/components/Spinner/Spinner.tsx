import React, { ComponentProps } from "react";
import clsx from "clsx";
import styles from "./Spinner.module.scss";

type Props = ComponentProps<"div"> & {
  theme?: "dark" | "light";
  containerClassName?: string;
  lineWidth?: string;
  width?: string;
  height?: string;
};

const Spinner: React.FC<Props> = ({
  className,
  containerClassName,
  lineWidth = "3px",
  width = "20px",
  height = "20px",
  theme = "dark",
  ...restProps
}) => {
  return (
    <div className={clsx("spinner-container", containerClassName)}>
      <div
        {...restProps}
        className={clsx("spinner", styles.spinner, className, theme === "light" && styles.light)}
      ></div>
      <style jsx>{`
        .spinner-container {
          width: ${width};
          height: ${height};
        }

        .spinner {
          border-width: ${lineWidth};
        }
      `}</style>
    </div>
  );
};

export default Spinner;
