import React from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";

const TopicsTwoColumnGrid = ({ title = "", children }) => {
  return (
    <Box my="10">
      <Heading
        textTransform="uppercase"
        letterSpacing="wide"
        my="5"
        textAlign="center"
        fontSize="sm"
      >
        {title}
      </Heading>
      <Grid gridTemplateColumns={{ base: "1fr", md: "0.8fr 0.258fr" }} gap="4">
        {children}
      </Grid>
    </Box>
  );
};

export default TopicsTwoColumnGrid;
