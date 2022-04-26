import { Component, ComponentProps, splitProps } from "solid-js";
import clsx from "clsx";
import styles from "./Copyrights.module.scss";

type Props = Omit<ComponentProps<"div">, "className">;

const Copyrights: Component<Props> = (_props) => {
  const [props, restProps] = splitProps(_props, ["children", "class"]);
  return (
    <div class={clsx(styles.copyrights, props.class)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Copyrights;
