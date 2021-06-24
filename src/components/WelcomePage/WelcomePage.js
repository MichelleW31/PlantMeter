import React from "react";
import styles from "./WelcomePage.module.scss";
import DripOnline from "../../assets/logo_blue.png";

const WelcomePage = () => {
  return (
    <main className={styles.HomePageContainer}>
      <section>
        <h1 className={styles.headerCopy}>Modrip</h1>
        <h2 className={styles.subHeaderCopy}>For drip on the go</h2>
      </section>
      <img className={styles.dripOnline} src={DripOnline} />
    </main>
  );
};

export default WelcomePage;
