import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";

const GridSectionWithTitle = ({
  columnLg = "2",
  columnMd = "2",
  columnBase = "1",
  gap = "4",
  title = "",
  children,
}) => {
  return (
    <Box my="10">
      {title !== '' && (
        <Heading
          textTransform="uppercase"
          letterSpacing="wide"
          my="5"
          textAlign="center"
          fontSize="sm"
        >
          {title}
        </Heading>
      )}
      <Grid
        gridTemplateColumns={{
          base: `${columnBase}fr`,
          md: `repeat(${columnMd}, 1fr)`,
          lg: `repeat(${columnLg}, 1fr)`,
        }}
        gap={gap}
      >
        {children}
      </Grid>
    </Box>
  );
};

export default GridSectionWithTitle;
