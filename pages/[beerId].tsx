import Layout from "../components/layout";
import styles from "./beerPage.module.css";

export default function BeerPage() {
  return (
    <Layout>
      <section className={styles.beerPage}>
        <div className={styles.textData}></div>
        <div className={styles.pic}></div>
      </section>
    </Layout>
  );
}
