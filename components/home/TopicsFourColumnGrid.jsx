import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";

const TopicsFourColumnGrid = ({ title = "", children }) => {
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
      <Grid gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap="4">
        {children}
      </Grid>
    </Box>
  );
};

export default TopicsFourColumnGrid;
