import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import PageSidebar from "./PageSidebar";

const PageLayout = ({
  children,
  isReadingPage = false,
  relatedArticles = [],
}) => {
  return (
    <Container maxW="1200px">
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "0.7fr 0.3fr" }}
        gap={{ base: "4", md: "10", lg: "32" }}
      >
        <GridItem mt="1">{children}</GridItem>
        <GridItem mt={{ base: "20px", md: "40px" }}>
          <PageSidebar
            isReadingPage={isReadingPage}
            relatedArticles={relatedArticles}
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default PageLayout;
