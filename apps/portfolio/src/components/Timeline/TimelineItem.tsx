import React from "react";
import clsx from "clsx";
import styles from "./Timeline.module.scss";

type Props = React.ComponentProps<"div"> & {
  period?: React.ReactNode;
  company?: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
};

const TimelineItem: React.FC<Props> = ({
  children,
  className,
  period,
  company,
  title,
  text,
  ...restProps
}) => {
  return (
    <div className={clsx(styles.item, className)} {...restProps}>
      <div className={styles.itemLeftPart}>
        <h5 className={styles.itemPeriod}>{period}</h5>
        <span className={styles.itemCompany}>{company}</span>
      </div>
      <div className={styles.itemLine}></div>
      <div className={styles.itemRightPart}>
        <h4 className={styles.itemTitle}>{title}</h4>
        <p className={styles.itemText}>{text}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
