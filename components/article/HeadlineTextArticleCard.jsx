import React from "react";
import Link from "next/link";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { formatDate } from "@/utils/helpers";

const HeadlineTextArticleCard = ({
  hasColor = false,
  isTransparent = false,
  minHeight = "300px",
  category = "",
  title = "",
  titleSize = "4xl",
  description = "",
  date = "",
  textAlign = "left",
  href = "/kategorija/article",
}) => {
  const cardBG = useColorModeValue(
    hasColor ? "#f2dfce" : "#fff7ef",
    hasColor ? "gray.900" : "gray.700"
  );
  const accentColor = useColorModeValue("#990f3d", "#0d7680");

  return (
    <Link href={href}>
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
          <Heading
            className="limit-heading"
            as="h3"
            fontSize={titleSize}
            my="4"
          >
            {title}
          </Heading>
          <Text>{description || ""}</Text>
          <Box color={accentColor} fontSize="xs" mt="4">
            {formatDate(date) || ""}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default HeadlineTextArticleCard;
