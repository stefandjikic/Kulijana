import React from "react";
import { MAIN_NAV } from "@/utils/constants";
import {
  Box,
  Container,
  Flex,
  useColorMode,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import NavItem from "./NavItem";
import SideMenu from "./SideMenu";

const MainNavigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    isOpen: isSideMenuOpen,
    onOpen: onSideMenuOpen,
    onClose: onSideMenuClose,
  } = useDisclosure();
  const sideMenuButtonRef = React.useRef();
  const accentColor = useColorModeValue("blackAlpha.300", "whiteAlpha.300");

  return (
    <Box as="nav" mb="5">
      <Container maxW="1200px">
        <Flex justifyContent="space-between" alignItems="center" paddingY="5">
          <Box>
            <HamburgerIcon
              boxSize={6}
              cursor='pointer'
              ref={sideMenuButtonRef}
              onClick={onSideMenuOpen}
            />
          </Box>
          <Box>
            <Logo />
          </Box>
          <Box>subscribe</Box>
        </Flex>
        <SideMenu
          isOpen={isSideMenuOpen}
          onClose={onSideMenuClose}
          btnRef={sideMenuButtonRef}
          toggleColorMode={toggleColorMode}
          colorMode={colorMode}
        />
      </Container>
      <Box borderY="1px solid" borderColor={accentColor}>
        <Container maxW="1200px">
          <Flex justifyContent="center">
            {MAIN_NAV.map((nav) => (
              <NavItem key={nav.id} nav={nav} />
            ))}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default MainNavigation;
