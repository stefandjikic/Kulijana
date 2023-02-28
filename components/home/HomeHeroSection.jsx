import { Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import HeadlineImageArticleCard from "../article/HeadlineImageArticleCard";
import HeadlineTextArticleCard from "../article/HeadlineTextArticleCard";
import TextArticle from "../article/TextArticle";
import SelectedArticlesSection from "./SelectedArticlesSection";

const HomeHeroSection = () => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "0.4fr auto 0.2fr" }}
      gap="4"
      mt="10"
    >
      <GridItem h={{ base: "auto", md: "480px" }} p="2">
        {/* POST ONE */}
        <HeadlineTextArticleCard
          title="Ogroman naslov ide ovde. Pomepezno uou, neverovatno!"
          // TODO: Limit this title to 3 lines max so it does not break the ui !!!
          description="lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet."
          category="IT"
          date="28/02/2023"
          isTransparent
        />
        <TextArticle title="Sporedna vest broj jedan" borderLeft="1px" verticalSpacing="10px" />
        <TextArticle title="Sporedna vest broj jedan" borderLeft="1px" verticalSpacing="10px" />
      </GridItem>
      <GridItem
        h={{ base: "auto", md: "480px" }}
        borderLeft="1px"
        borderRight="1px"
        borderColor="blackAlpha.300"
        p="2"
      >
        {/* POST TWO */}
        <HeadlineImageArticleCard
          title="Veliki naslov - Udarni"
          category="BIZ"
          titleSize="3xl"
          hasColor
          minHeight="480px"
        />
      </GridItem>
      <GridItem h={{ base: "auto", md: "480px" }} p="2">
        <Heading as="h3" mb='4' fontSize="sm">
          Odabrani članci
        </Heading>
        <SelectedArticlesSection />
      </GridItem>
    </Grid>
  );
};

export default HomeHeroSection;
