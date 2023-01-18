import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

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
