import React from "react";
import clsx from "clsx";
import TimelineItem from "./TimelineItem";
import styles from "./Timeline.module.scss";

type Props = React.ComponentProps<"div">;

type ITimeline = React.FC<Props> & {
  Item: typeof TimelineItem;
};

const Timeline: ITimeline = ({ className, ...restProps }) => {
  return <div className={clsx(styles.container, className)} {...restProps} />;
};

Timeline.Item = TimelineItem;

export default Timeline;
