import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const HeadlineImageArticleCard = ({
  hasColor = false,
  isTransparent = false,
  minHeight = "350px",
  category = "",
  title = "",
  titleSize = "xl"
}) => {
  const cardBG = useColorModeValue(
    hasColor ? "#f2dfce" : "#fff7ef",
    hasColor ? "gray.900" : "gray.700"
  );
  const accentColor = useColorModeValue('#990f3d', "#0d7680")

  return (
    <Box
      bg={isTransparent ? "transparent" : cardBG}
      h={minHeight}
      p="2"
    >
      <Box height='70%' bg="blackAlpha.600">SLIKA</Box>
      <Box mt='2' textAlign='center'>
        <Text color={accentColor} fontWeight='bold' fontSize="sm" textTransform="uppercase">
          {category || "KATEGORIJA"}
        </Text>
        <Heading as="h3" fontSize={titleSize} my="4">
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export default HeadlineImageArticleCard;
