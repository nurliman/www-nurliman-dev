import React, { ComponentProps, PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./PageTitle.module.scss";

type RelevantTags = Exclude<
  keyof JSX.IntrinsicElements,
  | "script"
  | "object"
  | "style"
  | "head"
  | "animate"
  | "animateMotion"
  | "animateTransform"
  | "feDistantLight"
  | "feFuncA"
  | "feFuncB"
  | "feFuncG"
  | "feFuncR"
  | "feMergeNode"
  | "fePointLight"
  | "feSpotLight"
  | "metadata"
  | "view"
>;

type Props<Tag extends RelevantTags> = {
  as?: RelevantTags;
  containerClass?: string;
} & ComponentProps<Tag>;

function PageTitle<Tag extends RelevantTags = "h2">({
  as,
  className,
  containerClass,
  ...restProps
}: PropsWithChildren<Props<Tag>>) {
  return (
    <div className={clsx(styles.container, containerClass)}>
      {React.createElement(as || "h2", { className: clsx(styles.title, className), ...restProps })}
    </div>
  );
}

export default PageTitle;
