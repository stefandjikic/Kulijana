import Layout from "@/components/layout/Layout";
import { getArticlesByCategory } from "@/graphQL";
import { Heading } from "@chakra-ui/react";
import React from "react";

const NaukaITehnologijaPage = ({articles}) => {
  // console.log(articles)
  return (
    <Layout>
      <Heading>Nauka i Tehnologija</Heading>
    </Layout>
  )
};

export default NaukaITehnologijaPage;

export async function getStaticProps() {
  const articles = (await getArticlesByCategory('magazin')) || [];

  return {
    props: {
      articles,
    },
  };
}