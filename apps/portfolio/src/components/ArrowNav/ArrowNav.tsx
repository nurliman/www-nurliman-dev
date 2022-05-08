import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSelector } from "store";
import styles from "./ArrowNav.module.scss";

export default function ArrowNav() {
  const router = useRouter();
  const sectionsList = useAppSelector((s) => s.sections.list);

  const activeIndex = useMemo(() => {
    return sectionsList.findIndex((x) => x.path === router.pathname);
  }, [router, sectionsList]);

  const nextPage = useMemo(() => {
    if (Number(activeIndex) < 0) return;

    let nextPageIndex: number;

    if (activeIndex >= sectionsList.length - 1) {
      nextPageIndex = 0;
    } else {
      nextPageIndex = activeIndex + 1;
    }

    return sectionsList[nextPageIndex];
  }, [activeIndex, sectionsList]);

  const prevPage = useMemo(() => {
    if (Number(activeIndex) < 0) return;

    let prevPageIndex: number;

    if (activeIndex < 1) {
      prevPageIndex = sectionsList.length - 1;
    } else {
      prevPageIndex = activeIndex - 1;
    }

    return sectionsList[prevPageIndex];
  }, [activeIndex, sectionsList]);

  return (
    <div className={styles.container}>
      <Link href={nextPage?.path || "#"}>
        <a className={styles.arrow}>
          <i className="lnr lnr-chevron-right"></i>
        </a>
      </Link>
      <Link href={prevPage?.path || "#"}>
        <a className={styles.arrow}>
          <i className="lnr lnr-chevron-left"></i>
        </a>
      </Link>
    </div>
  );
}
