import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const TextArticle = ({
  title = "",
  borderBottom = '',
  borderRight = '',
  borderTop = '',
  borderLeft = '',
  borderColor = 'blackAlpha.400'
}) => {
  return (
    <Box
      p={{base: '5', md: '10'}}
      borderTop={borderTop}
      borderBottom={borderBottom}
      borderRight={borderRight}
      borderLeft={borderLeft}
      borderColor={borderColor}
    >
      <Heading fontSize="lg">{title}</Heading>
    </Box>
  );
};

export default TextArticle;
