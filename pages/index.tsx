import { GetServerSideProps } from "next";
import Layout from "../components/layout";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import { Beer } from "../types";
import { setBeers } from "../store/beersSlice";
import { useAppDispatch } from "../store/hooks";
import { getBeers } from "../utils";
import { useEffect } from "react";

type SearchResultsProps = {
  beersInitial?: Beer[];
};

export default function Home({ beersInitial }: SearchResultsProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (beersInitial?.length) {
      dispatch(setBeers(beersInitial));
    }
  }, [beersInitial]);

  return (
    <Layout home>
      <SearchBar />

      <SearchResults />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const beersInitial = await getBeers(1, undefined, null);

  return {
    props: { beersInitial },
  };
};
