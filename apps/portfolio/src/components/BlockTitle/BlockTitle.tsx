import React, { ComponentProps, PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./BlockTitle.module.scss";

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

function BlockTitle<Tag extends RelevantTags = "h3">({
  as,
  className,
  containerClass,
  ...restProps
}: PropsWithChildren<Props<Tag>>) {
  return (
    <div className={clsx(styles.container, containerClass)}>
      {React.createElement(as || "h3", { className: clsx(styles.title, className), ...restProps })}
    </div>
  );
}

export default BlockTitle;
