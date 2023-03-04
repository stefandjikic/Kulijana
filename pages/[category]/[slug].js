import Layout from "@/components/layout/Layout";
import PageLayout from "@/components/layout/PageLayout";
import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const SlugInCategory = () => {
  return (
    <Layout>
      <PageLayout>
        <Heading mb="5">Naslov teksta</Heading>
        <Text mb="5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Box height="350px" bg="blackAlpha.300" my='5'>
          Slika
        </Box>
        <Heading as="h2" fontSize='2xl'>
          The standard Lorem Ipsum passage, used since the 1500s
        </Heading>
        <Text mb='5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Heading as="h2" fontSize='2xl'>
          Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in
          45 BC
        </Heading>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Text>
      </PageLayout>
    </Layout>
  );
};

export default SlugInCategory;
