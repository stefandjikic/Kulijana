import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const BigArticleCard = ({
  hasColor = false,
  isTransparent = false,
  minHeight = "350px",
  category = "",
  title = "",
  description = "",
  headingSize = "3xl",
  verticalSpace = "",
  href = "/kategorija/article",
}) => {
  const cardBG = useColorModeValue(
    hasColor ? "#f2dfce" : "#fff7ef",
    hasColor ? "gray.900" : "gray.700"
  );
  const accentColor = useColorModeValue("#990f3d", "#0d7680");

  return (
    <Link href={href} passHref>
      <Grid
        bg={isTransparent ? "transparent" : cardBG}
        h={minHeight}
        marginY={verticalSpace}
        p="2"
        gap="4"
        gridTemplateColumns="0.4fr 0.6fr"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Text
            color={accentColor}
            fontWeight="bold"
            fontSize="xs"
            textTransform="uppercase"
          >
            {category || "KATEGORIJA"}
          </Text>
          <Heading as="h3" my="4" fontSize={headingSize}>
            {title}
          </Heading>
          <Text>{description}</Text>
        </Flex>
        <GridItem bg="blackAlpha.600">SLIKA</GridItem>
      </Grid>
    </Link>
  );
};

export default BigArticleCard;
