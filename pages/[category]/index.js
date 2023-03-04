import React from "react";
import { Heading } from "@chakra-ui/react";
import ArticleCard from "@/components/article/ArticleCard";
import BigArticleCard from "@/components/article/BigArticleCard";
import Layout from "@/components/layout/Layout";
import PageLayout from "@/components/layout/PageLayout";
import GridSectionWithTitle from "@/components/utils/GridSectionWithTitle";

const dynamicCategory = () => {
  return (
    <Layout>
      <PageLayout>
        <Heading mb="5">Kategorija</Heading>
        {/* <Box height='300px' bg='blackAlpha.300'>SLIKA</Box> */}
        <BigArticleCard
          title="Naslov poslednjeg članka u kategoriji"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <GridSectionWithTitle gap="6">
          <ArticleCard
            title="Naslov drugog članka"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            href="/"
          />
          <ArticleCard
            title="Naslov trećeg članka"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            href="/"
          />
        </GridSectionWithTitle>
        {[1, 2, 3, 4, 5].map((item) => (
          <BigArticleCard
            minHeight="250px"
            headingSize="xl"
            verticalSpace="15px"
            key={item}
            title="Naslov ostalih članaka u kategoriji"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        ))}
      </PageLayout>
    </Layout>
  );
};

export default dynamicCategory;
