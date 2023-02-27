import { Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

const HomeHeroSection = () => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "0.3fr auto 0.2fr" }}
      gap="4"
      mt="10"
    >
      <GridItem h={{ base: "auto", md: "480px" }} border="1px" p="2">
        POST ONE
      </GridItem>
      <GridItem h={{ base: "auto", md: "480px" }} border="1px" p="2">
        POST TWO
      </GridItem>
      <GridItem h={{ base: "auto", md: "480px" }} border="1px" p="2">
        <Heading as="h3" fontSize="sm">
          Odabrani članci
        </Heading>
      </GridItem>
    </Grid>
  );
};

export default HomeHeroSection;
