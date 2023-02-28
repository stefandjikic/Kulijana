import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ArticleCard from "../article/ArticleCard";
import TextArticle from "../article/TextArticle";

const SelectedArticlesSection = () => {
  return (
    <Box>
      <ArticleCard
        title="Odabrani članak od strane Kulijane"
        isTransparent
        minHeight={{ base: "300px", md: "250px" }}
        titleSize="md"
      />
      <TextArticle title="Odabrani članak od strane Kulijane bez slike" borderTop="1px" />
    </Box>
  );
};

export default SelectedArticlesSection;
