import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import defaultImage from "@/public/assets/img/default-placeholder.png";

const InfoComponent = ({ article }) => {
  const accentColor = useColorModeValue("#990f3d", "#0d7680");
  const {
    category: { slug: categorySlug = "", name: categoryName = "" } = {},
    articleImage: { url: imgUrl = "" } = {},
    slug = "",
    title = "",
    excerpt = "",
  } = { ...article };
  return (
    <Link href={`${categorySlug}/${slug}`}>
      <Flex
        my="10"
        p="4"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "0.25fr 0.75fr" }}
          gap="4"
        >
          <Box bg="blackAlpha.600" h="150px" position="relative">
            <Image
              src={imgUrl || defaultImage}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Flex flexDirection="column" justifyContent="center">
            <Text
              color={accentColor}
              fontWeight="bold"
              fontSize="xs"
              textTransform="uppercase"
              mb="5"
            >
              {categoryName}
            </Text>
            <Heading as="h3" fontSize="3xl" mb="4">
              {title}
            </Heading>
            <Text className="limit-description">{excerpt}</Text>
          </Flex>
        </Grid>
      </Flex>
    </Link>
  );
};

export default InfoComponent;
