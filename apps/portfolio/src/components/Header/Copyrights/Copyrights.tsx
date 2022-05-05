import { FunctionComponent, DetailedHTMLProps, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Copyrights.module.scss";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Copyrights: FunctionComponent<Props> = ({ children, className, ...restProps }) => {
  return (
    <div className={clsx(styles.copyrights, className)} {...restProps}>
      {children}
    </div>
  );
};

export default Copyrights;
