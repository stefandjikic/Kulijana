import { Box, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NavItem = ({ nav = {} }) => {
  const outlineColor = useColorModeValue("blackAlpha.700", "whiteAlpha.800");
  const dropDownItemColor = useColorModeValue("#fff7ef", "gray.700");
  const dropdownHoverColor = useColorModeValue("#fff1e5", "gray.800");

  return (
    <Box className="nav-item" py="2" whiteSpace='nowrap'>
      <Link href={nav.route}>
        <Box
          _hover={{ color: outlineColor }}
          mx={{ base: "2", lg: "4" }}
          fontSize={{ base: "xs", md: "xs", lg: "sm" }}
          textTransform="uppercase"
          // fontWeight='bold'
        >
          {nav.title}
        </Box>
      </Link>
      <Box className="nav-item-dropdown" boxShadow="md">
        {nav.subLinks &&
          nav.subLinks.map((sub) => (
            <Link key={sub.title} href={sub.route}>
              <Box
                bg={dropDownItemColor}
                fontSize={{ base: "xs", md: "xs", lg: "sm" }}
                _hover={{ bg: dropdownHoverColor }}
                p="2"
              >
                {sub.title}
              </Box>
            </Link>
          ))}
      </Box>
    </Box>
  );
};

export default NavItem;
