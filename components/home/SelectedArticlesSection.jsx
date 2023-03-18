import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ArticleCard from "../article/ArticleCard";
import TextArticle from "../article/TextArticle";

const SelectedArticlesSection = ({ pickedArticles = [] }) => {
  return (
    <Box>
      <ArticleCard
        title={pickedArticles[1]?.title}
        imgUrl={pickedArticles[1]?.articleImage?.url}
        href={`${pickedArticles[1]?.category?.slug}/${pickedArticles[1]?.slug}`}
        isTransparent
        minHeight={{ base: "300px", md: "250px" }}
        titleSize="md"
      />
      <TextArticle
        title={pickedArticles[0]?.title}
        borderTop="1px"
      />
    </Box>
  );
};

export default SelectedArticlesSection;
