import { ReactElement } from "react";
import { NextSeo } from "next-seo";
import MainLayout from "components/Layouts/MainLayout";
import Typer from "components/Typer";
import { useAppSelector } from "store";
import styles from "styles/HomePage.module.scss";

const HomePage = () => {
  const meState = useAppSelector((s) => s.me);

  return (
    <>
      <NextSeo title="Home" canonical="https://nurliman.dev/" />
      <div className={styles.titleBlock}>
        <h2>{meState.name}</h2>
        <Typer dataText={meState.titles} className={styles.subtitle} typingSpeed={80} />
      </div>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => (
  <MainLayout contentInnerClassName={styles.centered}>{page}</MainLayout>
);

export default HomePage;
