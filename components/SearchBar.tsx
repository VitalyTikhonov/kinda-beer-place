import Image from "next/image";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <div className={styles.searchField}>
          <input type="text" className={styles.searchFieldProper} placeholder="What’s on the menu..." />

          <Image
            priority
            src="/images/bottle-opener-2-svgrepo-com 1.png"
            className={styles.openerIcon}
            height={40}
            width={40}
            alt="Search icon"
          />
        </div>
      </form>
    </section>
  );
}
