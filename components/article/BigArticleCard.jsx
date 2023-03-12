import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import defaultImage from "@/public/assets/img/default-placeholder.png";

const BigArticleCard = ({
  hasColor = false,
  isTransparent = false,
  minHeight = "350px",
  category = "",
  title = "",
  description = "",
  headingSize = "3xl",
  verticalSpace = "",
  imgUrl = "",
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
          <Heading
            className="limit-heading"
            as="h3"
            my="4"
            fontSize={headingSize}
          >
            {title}
          </Heading>
          <Text className="limit-description">{description}</Text>
        </Flex>
        <GridItem bg="blackAlpha.600" position="relative">
          <Image
            src={imgUrl || defaultImage}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </GridItem>
      </Grid>
    </Link>
  );
};

export default BigArticleCard;
