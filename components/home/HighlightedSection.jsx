import React from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { useArticlesContext } from "@/context/ArticlesContext";
import ArticleCard from "../article/ArticleCard";

const HighlightedSection = () => {
  const { featuredArticles } = useArticlesContext();

  if (featuredArticles?.length === 0) {
    return <Box />;
  }

  return (
    <Box my="10">
      <Heading
        textTransform="uppercase"
        letterSpacing="wide"
        my="5"
        textAlign="center"
        fontSize="sm"
      >
        Istaknuto
      </Heading>
      <Grid gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap="4">
        {featuredArticles &&
          featuredArticles?.length > 0 &&
          featuredArticles
            ?.slice(0, 4)
            ?.map((article) => (
              <ArticleCard
                key={article?.id}
                category={article?.category?.name}
                title={article?.title}
                description={article?.excerpt}
                imgUrl={article?.articleImage?.url}
                href={`${article?.category?.slug}/${article?.slug}`}
              />
            ))}
      </Grid>
    </Box>
  );
};

export default HighlightedSection;
