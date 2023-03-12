import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import ArticleCard from "../article/ArticleCard";
import BigArticleCard from "../article/BigArticleCard";
import TextArticle from "../article/TextArticle";
import TopicsTwoColumnGrid from "./TopicsTwoColumnGrid";

const InterestingFactsSection = ({ articles = [] }) => {
  return (
    <TopicsTwoColumnGrid title="ZANIMLJIVOSTI">
      <Box>
        <BigArticleCard
          isTransparent
          minHeight="400px"
          category={articles[7]?.category?.name}
          title={articles[7]?.title}
          description={articles[7]?.excerpt}
          imgUrl={articles[7]?.articleImage?.url}
          href={`${articles[7]?.category?.slug}/${articles[7]?.slug}`}
        />
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="4"
          mt="2"
        >
          {articles?.length > 0 &&
            articles
              ?.slice(0, 6)
              ?.map((article) => (
                <TextArticle
                  key={article?.id}
                  title={article?.title}
                  href={`${article?.category?.slug}/${article?.slug}`}
                  borderBottom="1px"
                  borderRight="1px"
                />
              ))}
        </Grid>
      </Box>
      <ArticleCard
        isTransparent
        minHeight="400px"
        category={articles[6]?.category?.name}
        title={articles[6]?.title}
        description={articles[6]?.excerpt}
        imgUrl={articles[6]?.articleImage?.url}
        href={`${articles[6]?.category?.slug}/${articles[6]?.slug}`}
      />
    </TopicsTwoColumnGrid>
  );
};

export default InterestingFactsSection;
