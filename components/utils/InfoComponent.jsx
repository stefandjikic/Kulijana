import React from "react";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";

const InfoComponent = ({ description = "" }) => {
  return (
    <Flex my='10' p="4" flexDir="column" justifyContent="center" alignItems="center">
      <Grid gridTemplateColumns={{ base: "1fr", md: "0.25fr 0.75fr" }} gap="4">
        <Box bg="blackAlpha.600" h="150px">
          SLIKA
        </Box>
        <Flex flexDirection='column' justifyContent='center'>
          <Heading as="h3" fontSize='xl' mb='4'>Da li ste znali?</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptates praesentium dolor voluptatem totam a amet ab harum odit
            unde id delectus aut fugit, nobis dolorem doloribus ex nostrum
            placeat.
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default InfoComponent;
