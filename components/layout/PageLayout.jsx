import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import PageSidebar from "./PageSidebar";

const PageLayout = ({ children, isReadingPage = false }) => {
  return (
    <Container maxW="1200px">
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "0.7fr 0.3fr" }}
        gap={{ base: "4", md: "10", lg: "32" }}
      >
        <GridItem>{children}</GridItem>
        <GridItem>
          <PageSidebar isReadingPage={isReadingPage} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default PageLayout;
