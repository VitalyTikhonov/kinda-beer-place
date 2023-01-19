import React, { useEffect, useState } from "react";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import { selectBeers } from "../store/beersSlice";
import { useAppSelector } from "../store/hooks";
import Card from "./Card";
import styles from "./SearchResults.module.css";
import PagButton from "./PagButton";

const CARDS_PER_PAGE = 6;

export default function SearchResults() {
  const beers = useAppSelector(selectBeers);
  const [pageIndex, setPageIndex] = useState(1);
  const [cardsToRender, setCardsToRender] = useState<React.ReactNode>([]);
  const [pagElements, setPagElement] = useState<React.ReactNode>([]);

  useEffect(() => {
    const startIndex = (pageIndex - 1) * CARDS_PER_PAGE;
    setCardsToRender(
      beers.slice(startIndex, startIndex + CARDS_PER_PAGE).map((item) => <Card data={item} key={item.id} />)
    );

    const nPages = Math.ceil(beers.length / CARDS_PER_PAGE);
    const newPagElements: React.ReactNode[] = [];
    const firstPagIndex = Math.max(1, pageIndex - 2);
    const lastPagIndex = Math.min(pageIndex + 2, nPages);
    if (firstPagIndex > 1) {
      newPagElements.push(
        <PagButton key={uuidv4()} onClick={() => setPageIndex(1)} pageIndex={1} isActive={pageIndex === 1} />,
        <span key={uuidv4()} className={cn("roundButton", styles.pagElement, styles.pagEllipsis)}>
          ...
        </span>
      );
    }
    for (let i = firstPagIndex; i <= lastPagIndex; i++) {
      newPagElements.push(
        <PagButton key={uuidv4()} onClick={() => setPageIndex(i)} pageIndex={i} isActive={pageIndex === i} />
      );
    }
    if (lastPagIndex < nPages) {
      newPagElements.push(
        <span key={uuidv4()} className={cn("roundButton", styles.pagElement, styles.pagEllipsis)}>
          ...
        </span>,
        <PagButton key={uuidv4()} onClick={() => setPageIndex(nPages)} pageIndex={nPages} isActive={pageIndex === nPages} />
      );
    }
    setPagElement(newPagElements);
  }, [beers, pageIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.cards}>{cardsToRender}</div>

      {beers.length > CARDS_PER_PAGE && <div className={styles.pagination}>{pagElements}</div>}
    </section>
  );
}
