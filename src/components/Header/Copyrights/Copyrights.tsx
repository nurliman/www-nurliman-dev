import { Component, ComponentProps } from "solid-js";
import clsx from "clsx";
import styles from "./Copyrights.module.scss";

type Props = ComponentProps<"div">;

const Copyrights: Component<Props> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles.copyrights, className)} {...props}>
      {children}
    </div>
  );
};

export default Copyrights;
