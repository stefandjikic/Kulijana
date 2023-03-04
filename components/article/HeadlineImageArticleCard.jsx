import React from "react";
import Link from "next/link";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const HeadlineImageArticleCard = ({
  hasColor = false,
  isTransparent = false,
  minHeight = "350px",
  category = "",
  title = "",
  titleSize = "xl",
  verticalSpacing = "",
  href = "/kategorija/article",
}) => {
  const cardBG = useColorModeValue(
    hasColor ? "#f2dfce" : "#fff7ef",
    hasColor ? "gray.900" : "gray.700"
  );
  const accentColor = useColorModeValue("#990f3d", "#0d7680");

  return (
    <Link href={href}>
      <Box
        bg={isTransparent ? "transparent" : cardBG}
        h={minHeight}
        p="2"
        my={verticalSpacing}
      >
        <Box height="70%" bg="blackAlpha.600">
          SLIKA
        </Box>
        <Box mt="2" textAlign="center">
          <Text
            color={accentColor}
            fontWeight="bold"
            fontSize="sm"
            textTransform="uppercase"
          >
            {category || ""}
          </Text>
          <Heading as="h3" fontSize={titleSize} my="4">
            {title}
          </Heading>
        </Box>
      </Box>
    </Link>
  );
};

export default HeadlineImageArticleCard;
