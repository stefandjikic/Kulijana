import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import defaultImage from "@/public/assets/img/default-placeholder.png";

const HeadlineImageArticleCard = ({
  hasColor = false,
  isTransparent = false,
  minHeight = "350px",
  category = "",
  title = "",
  titleSize = "xl",
  verticalSpacing = "",
  imgUrl = "",
  href = "",
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
        <Box height="70%" bg="blackAlpha.600" position="relative">
          <Image
            src={imgUrl || defaultImage}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
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
