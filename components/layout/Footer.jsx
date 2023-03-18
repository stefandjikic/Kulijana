import React from "react";
import {
  Box,
  Container,
  Flex,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./Logo";
import Link from "next/link";
import SocialIcons from "../utils/SocialIcons";
import { MAIN_NAV } from "@/utils/constants";

const Footer = () => {
  const accentColor = "#0d7680";
  const footerBg = useColorModeValue("#262a33", "blackAlpha.300");
  return (
    <Box bg={footerBg} color="whiteAlpha.700">
      <Container maxW="1280px">
        <Grid gridTemplateColumns="repeat(2, auto)" pt="10" pb="8">
          <Box textAlign="center">
            <Logo subheading />
            <Flex justifyContent="center" my="4">
              <SocialIcons light />
            </Flex>
          </Box>
          <Grid
            gridTemplateColumns="repeat(3, 1fr)"
            gridColumnGap="50px"
            textAlign="left"
          >
            {MAIN_NAV.filter((mn) => mn.id !== 1).map((navItem) => (
              <Box key={navItem?.id} mb="4">
                <Link href={navItem?.route} passHref>
                  <Box _hover={{ color: accentColor }}>{navItem?.title}</Box>
                </Link>

                {navItem?.subLinks &&
                  navItem?.subLinks?.map((subLink) => (
                    <Link href={subLink?.route} passHref key={subLink?.id}>
                      <Box mt="4" _hover={{ color: accentColor }}>
                        {subLink?.title}
                      </Box>
                    </Link>
                  ))}
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
      <Box textAlign="center" fontSize="xs" p="4" borderTop="1px">
        <Box>{`© Copyright ${new Date().getFullYear()} kulijana.rs - Sva prava zadržana`}</Box>
      </Box>
    </Box>
  );
};

export default Footer;
