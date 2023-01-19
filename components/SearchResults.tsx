import { useEffect } from "react";
import { selectBeers } from "../store/beersSlice";
import { useAppSelector } from "../store/hooks";
import Card from "./Card";
import styles from "./SearchResults.module.css";

export default function SearchResults() {
  const beers = useAppSelector(selectBeers);
  useEffect(() => console.log(beers), []);

  return (
    <section className={styles.section}>
      {beers.map((item) => (
        <Card data={item} key={item.id}/>
      ))}
    </section>
  );
}
