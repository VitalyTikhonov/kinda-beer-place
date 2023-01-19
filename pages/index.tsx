import Head from "next/head";
import Layout from "../components/layout";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

export default function Home() {
  return (
    <Layout home>
      <SearchBar />

      <SearchResults />
    </Layout>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//     },
//   };
// };
