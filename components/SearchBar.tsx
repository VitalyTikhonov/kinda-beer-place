import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { getBeers } from "../utils";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    getBeers(1, 6, searchTerm)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.searchField}>
          <input
            value={searchTerm}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            type="text"
            className={styles.searchFieldProper}
            placeholder="What’s on the menu..."
          />

          <button type="submit" className={styles.submitButton}>
            <Image
              priority
              src="/images/bottle-opener-2-svgrepo-com.svg"
              className={styles.openerIcon}
              height={16}
              width={16}
              alt="Search icon"
            />
          </button>
        </div>
      </form>
    </section>
  );
}
