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
          category={articles[0]?.category?.name}
          title={articles[0]?.title}
          description={articles[0]?.excerpt}
          imgUrl={articles[0]?.articleImage?.url}
          href={`${articles[0]?.category?.slug}/${articles[0]?.slug}`}
        />
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap="4"
          mt="2"
        >
          {articles?.length > 0 &&
            articles
              ?.slice(2, articles?.length)
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
        category={articles[1]?.category?.name}
        title={articles[1]?.title}
        description={articles[1]?.excerpt}
        imgUrl={articles[1]?.articleImage?.url}
        href={`${articles[1]?.category?.slug}/${articles[1]?.slug}`}
      />
    </TopicsTwoColumnGrid>
  );
};

export default InterestingFactsSection;
