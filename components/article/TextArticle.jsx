import React from "react";
import Link from "next/link";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const TextArticle = ({
  title = "",
  category = "",
  borderBottom = "",
  borderRight = "",
  borderTop = "",
  borderLeft = "",
  borderColor = "blackAlpha.400",
  verticalSpacing = "",
  horizontalSpacing = "",
  href = "/kategorija/article",
}) => {
  const accentColor = useColorModeValue("#990f3d", "#0d7680");
  return (
    <Link href={href}>
      <Box
        p="4"
        borderTop={borderTop}
        borderBottom={borderBottom}
        borderRight={borderRight}
        borderLeft={borderLeft}
        borderColor={borderColor}
        my={verticalSpacing}
        mx={horizontalSpacing}
      >
        {category && (
          <Text
            fontSize="x-small"
            textTransform="uppercase"
            mb="2"
            color={accentColor}
          >
            {category}
          </Text>
        )}
        <Heading className="limit-heading-sm" fontSize="lg">
          {title}
        </Heading>
      </Box>
    </Link>
  );
};

export default TextArticle;
