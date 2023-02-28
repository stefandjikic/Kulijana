import React from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const HeadlineTextArticleCard = ({
  hasColor = false,
  isTransparent = false,
  minHeight = "300px",
  category = "",
  title = "",
  titleSize = "4xl",
  description = "",
  date = "",
  textAlign = "left"
}) => {
  const cardBG = useColorModeValue(
    hasColor ? "#f2dfce" : "#fff7ef",
    hasColor ? "gray.900" : "gray.700"
  );
  const accentColor = useColorModeValue("#990f3d", "#0d7680");

  return (
    <Box bg={isTransparent ? "transparent" : cardBG} h={minHeight} p="2">
      <Box mt="2" textAlign={textAlign}>
        <Text
          color={accentColor}
          fontWeight="bold"
          fontSize="sm"
          textTransform="uppercase"
        >
          {category || "KATEGORIJA"}
        </Text>
        <Heading as="h3" fontSize={titleSize} my="4">
          {title}
        </Heading>
        <Text>{description || ""}</Text>
        <Box color={accentColor} fontSize="xs" mt='4'>
          {date || ""}
        </Box>
      </Box>
    </Box>
  );
};

export default HeadlineTextArticleCard;
