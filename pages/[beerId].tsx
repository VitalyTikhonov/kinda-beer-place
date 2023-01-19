import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import { Beer } from "../types";
import { getThatBeer } from "../utils";
import styles from "./beerPage.module.css";

type BeerPageProps = {
  beer: Beer;
};

export default function BeerPage({ beer }: BeerPageProps) {
  if (beer) {
    return (
      <Layout>
        <section className={styles.beerPage}>
          <div className={styles.textData}>
            <h3>
              {beer.name} <span className={styles.abv}>{beer.abv}</span>
            </h3>

            <h4>{beer.tagline}</h4>

            <p>{beer.description}</p>

            <h4>Try it with</h4>

            {beer.food_pairing && (
              <ul className={styles.foodPairings}>
                {beer.food_pairing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            <Link href="/" >← Back to menu</Link>
          </div>
          <Image
            priority
            src={beer.image_url ?? "/images/beer-glass.svg"}
            className={styles.pic}
            width={200}
            height={700}
            alt={`Get some beer – try ${beer.name}!`}
          />
        </section>
      </Layout>
    );
  }
  return <h2 style={{ marginTop: "500px" }}>Something is wrong!..</h2>;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const resultArray = await getThatBeer(Number(params?.beerId ?? 1));
  return {
    props: {
      beer: resultArray ? resultArray[0] : null,
    },
  };
};
