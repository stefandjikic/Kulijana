import { Box, Text } from "@chakra-ui/react";
import React from "react";
import HeadlineImageArticleCard from "../article/HeadlineImageArticleCard";
import TextArticle from "../article/TextArticle";

const PageSidebar = ({ isReadingPage = false }) => {
  return (
    <Box borderTop="2px" py="2" px={{ base: "0", md: "4" }}>
      {isReadingPage && (
        <Box>
          <Text fontWeight="bold" opacity="0.8">
            Povezani tekstovi
          </Text>
          <HeadlineImageArticleCard
            title="Povezna kategorija naslov"
            titleSize="lg"
            minHeight={{ base: "300px", md: "220px" }}
            verticalSpacing="2"
            isTransparent
          />
          <HeadlineImageArticleCard
            title="Povezni tekst nasolv"
            titleSize="lg"
            minHeight={{ base: "300px", md: "220px" }}
            verticalSpacing="2"
            isTransparent
          />
        </Box>
      )}
      <Text fontWeight="bold" opacity="0.8">
        Popularni tekstovi
      </Text>
      <HeadlineImageArticleCard
        title="Popularan tekst prvi"
        titleSize="lg"
        minHeight={{ base: "300px", md: "220px" }}
        verticalSpacing="2"
        // isTransparent
      />
      <TextArticle
        title="Poularan tekst drugi"
        category="IT"
        borderBottom="1px"
      />
      <TextArticle
        title="Poularan tekst treći"
        category="BIZ"
        borderBottom="1px"
      />
      <TextArticle
        title="Poularan tekst četvrti"
        category="ZANIMLJIVOSTI"
        borderBottom="1px"
      />
      <TextArticle
        title="Poularan tekst peti"
        category="MAGAZIN"
        borderBottom="1px"
      />
    </Box>
  );
};

export default PageSidebar;
