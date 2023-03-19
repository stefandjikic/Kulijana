import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import defaultImage from "@/public/assets/img/default-placeholder.png";

const ArticleCard = ({
  hasColor = false,
  isTransparent = false,
  minHeight = { base: "500px", md: "350px" },
  category = "",
  title = "",
  description = "",
  titleSize = "xl",
  largeImage = false,
  verticalSpacing = "",
  imgUrl = "",
  href = "/",
}) => {
  const cardBG = useColorModeValue(
    hasColor ? "#f2dfce" : "#fff7ef",
    hasColor ? "gray.900" : "gray.700"
  );
  const accentColor = useColorModeValue("#990f3d", "#0d7680");

  return (
    <Link href={href} passHref>
      <Box
        bg={isTransparent ? "transparent" : cardBG}
        h={minHeight}
        p="2"
        my={verticalSpacing}
      >
        <Box
          height={{
            base: largeImage ? "80%" : "60%",
            md: largeImage ? "80%" : "40%",
          }}
          bg="blackAlpha.600"
          position="relative"
        >
          <Image
            src={imgUrl || defaultImage}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box mt="2">
          <Text
            color={accentColor}
            fontWeight="bold"
            fontSize="x-small"
            textTransform="uppercase"
          >
            {category || "KATEGORIJA"}
          </Text>
          <Heading
            className="limit-heading-sm"
            as="h3"
            fontSize={titleSize}
            my="4"
          >
            {title}
          </Heading>
          <Text className="limit-description">{description}</Text>
        </Box>
      </Box>
    </Link>
  );
};

export default ArticleCard;
