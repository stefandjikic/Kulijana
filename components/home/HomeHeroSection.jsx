import { Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import HeadlineImageArticleCard from "../article/HeadlineImageArticleCard";
import HeadlineTextArticleCard from "../article/HeadlineTextArticleCard";
import TextArticle from "../article/TextArticle";
import SelectedArticlesSection from "./SelectedArticlesSection";

const HomeHeroSection = ({ heroArticles = [], pickedArticles = [] }) => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "0.4fr 0.8fr 0.3fr" }}
      gap="4"
      mt="10"
    >
      <GridItem h={{ base: "auto", md: "480px" }} p="2">
        {/* POST ONE TEXT */}
        <HeadlineTextArticleCard
          href={`${heroArticles[2]?.category?.slug}/${heroArticles[2]?.slug}`}
          title={heroArticles[2]?.title}
          description={heroArticles[2]?.excerpt}
          category={heroArticles[2]?.category?.name}
          date={heroArticles[2]?.createdAt}
          isTransparent
        />
        {/* POST TWO TEXT */}
        <TextArticle
          href={`${heroArticles[1]?.category?.slug}/${heroArticles[1]?.slug}`}
          title={heroArticles[1]?.title}
          borderLeft="1px"
          verticalSpacing="10px"
        />
        {/* POST THREE TEXT */}
        <TextArticle
          href={`${heroArticles[0]?.category?.slug}/${heroArticles[0]?.slug}`}
          title={heroArticles[0]?.title}
          borderLeft="1px"
          verticalSpacing="10px"
        />
      </GridItem>
      <GridItem
        h={{ base: "auto", md: "480px" }}
        borderLeft="1px"
        borderRight="1px"
        borderColor="blackAlpha.300"
        p="2"
      >
        {/* POST ONE IMAGE */}
        <HeadlineImageArticleCard
          title={heroArticles[3]?.title}
          category={heroArticles[3]?.category?.name}
          imgUrl={heroArticles[3]?.articleImage?.url}
          href={`${heroArticles[3]?.category?.slug}/${heroArticles[3]?.slug}`}
          titleSize="3xl"
          hasColor
          minHeight="480px"
        />
      </GridItem>
      <GridItem h={{ base: "auto", md: "480px" }} p="2">
        <Heading as="h3" mb="4" fontSize="sm">
          Odabrani članci
        </Heading>
        <SelectedArticlesSection pickedArticles={pickedArticles} />
      </GridItem>
    </Grid>
  );
};

export default HomeHeroSection;
