import Card from "./Card";
import styles from "./SearchResults.module.css";

export default function SearchResults() {
  return (
    <section className={styles.section}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}
