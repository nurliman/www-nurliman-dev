import { ComponentProps, JSX } from "solid-js";

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

export default function Title<Tag extends RelevantTags = "h2">(_props: Props<Tag>): JSX.Element;
