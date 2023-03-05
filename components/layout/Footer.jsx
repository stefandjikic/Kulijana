import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Box bg="#262a33" color="whiteAlpha.700">
      <Container maxW="1280px">
        <Box p="5" textAlign="center">
          <Logo />
        </Box>
      </Container>
      <Box
        textAlign="center"
        fontSize="xs"
        p='4'
        borderTop='1px'
      >{`© Copyright ${new Date().getFullYear()} kulijana.rs - Sva prava zadržana`}</Box>
    </Box>
  );
};

export default Footer;
