import {
  Box,
  Grid,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import ArticleCard from "../article/ArticleCard";

const HighlightedSection = () => {

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
        <ArticleCard />
        <ArticleCard/>
        <ArticleCard />
        <ArticleCard />
      </Grid>
    </Box>
  );
};

export default HighlightedSection;
