import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import cn from "classnames";
import { getBeers } from "../utils";
import styles from "./SearchBar.module.css";
import { useAppDispatch } from "../store/hooks";
import { setBeers } from "../store/beersSlice";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    getBeers(1, undefined, searchTerm)
      .then((res) => dispatch(setBeers(res ?? [])))
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

          {!searchTerm.length ? (
            <button type="submit" className={cn("roundButton", styles.submitButton)}>
              <Image
                priority
                src="/images/bottle-opener-2-svgrepo-com.svg"
                className={styles.openerIcon}
                height={16}
                width={16}
                alt="Search icon"
                title="Search for beers"
              />
            </button>
          ) : (
            <button type="button" className={cn("roundButton", styles.submitButton)}>
              <Image
                priority
                src="/images/bottle-svgrepo-com.svg"
                className={styles.openerIcon}
                height={16}
                width={16}
                alt="Search icon"
                title="Reset search"
                onClick={() => {
                  setSearchTerm("");
                  getBeers(1, undefined, null)
                    .then((res) => dispatch(setBeers(res ?? [])))
                    .catch((error) => console.log(error));
                }}
              />
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
