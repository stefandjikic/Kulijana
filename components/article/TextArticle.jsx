import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const TextArticle = ({
  title = "",
  borderBottom = '',
  borderRight = '',
  borderTop = '',
  borderLeft = '',
  borderColor = 'blackAlpha.400',
  verticalSpacing = "",
  horizontalSpacing = "",
}) => {
  return (
    <Box
      p='4'
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderRight={borderRight}
      borderLeft={borderLeft}
      borderColor={borderColor}
      my={verticalSpacing}
      mx={horizontalSpacing}
    >
      <Heading fontSize="lg">{title}</Heading>
    </Box>
  );
};

export default TextArticle;
