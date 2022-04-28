import { splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import clsx from "clsx";
import styles from "./PageTitle.module.scss";

export default function PageTitle(_props) {
  const [props, restProps] = splitProps(_props, [
    "as",
    "children",
    "class",
    "className",
    "classList",
    "containerClass",
  ]);
  return (
    <div class={clsx(styles.container, props.containerClass)}>
      <Dynamic
        component={props.as || "h2"}
        class={clsx(styles.title, props.class, props.className, props.classList)}
        {...restProps}
      >
        {props.children}
      </Dynamic>
    </div>
  );
}
