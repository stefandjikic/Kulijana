import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Logo = ({ size = "40px", subheading = false }) => {
  return (
    <Box>
      <Link href="/">
        <Heading fontSize={size} className="logo">
          KULijana
        </Heading>
      </Link>
      {subheading && (
        <Flex justifyContent="center">
          <Text mt="2" maxW="200px" fontSize="xs" textAlign="center">
            Portal posvećen informisanju, zabavi i temama iz svakodnevnog života
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Logo;
