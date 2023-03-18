import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Switch,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import { MAIN_NAV } from "@/utils/constants";
import Link from "next/link";
import SocialIcons from "../utils/SocialIcons";
import { useRouter } from "next/router";

const SideMenu = ({ isOpen, onClose, toggleColorMode, colorMode }) => {
  const router = useRouter();
  const currentRoute = router.asPath;

  const menuColor = useColorModeValue("#fff7ef", "gray.700");
  const borderColor = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const buttonColorScheme = useColorModeValue("blackAlpha", "gray");
  const accentColor = useColorModeValue("#990f3d", "#0d7680");

  const closeMenu = () => {
    setTimeout(() => {
      isOpen && onClose();
    }, 100);
  };

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={menuColor}>
        <DrawerCloseButton mt="2" />
        <DrawerHeader borderBottom="1px" borderColor={borderColor}>
          <Logo size="25px" />
        </DrawerHeader>

        <DrawerBody borderBottom="1px" borderColor={borderColor}>
          <Flex mt="4" justifyContent="space-between" alignItems="center">
            <Box fontWeight="bold" fontSize="sm">
              Tamna tema
            </Box>
            <Switch
              onChange={toggleColorMode}
              isChecked={colorMode === "dark" ? true : false}
            />
          </Flex>
          <Button mt="4" w="full" colorScheme={buttonColorScheme}>
            Newsletter
          </Button>
          <Box mt="8">
            <Box
              fontSize="sm"
              mb="2"
              pb="2"
              fontWeight="bold"
              borderBottom="2px"
              borderColor={borderColor}
            >
              Kategorije
            </Box>
            <Flex flexDirection="column">
              {MAIN_NAV.filter((mn) => mn.id !== 1).map((navItem) => (
                <Box key={navItem?.id} my="2">
                  <Link
                    href={navItem?.route}
                    style={{
                      color: currentRoute === navItem?.route ? accentColor : "",
                    }}
                    passHref
                    onClick={closeMenu}
                  >
                    <Box _hover={{ color: accentColor }}>{navItem?.title}</Box>
                  </Link>
                  {navItem?.subLinks &&
                    navItem?.subLinks?.map((subLink) => (
                      <Link
                        key={subLink?.id}
                        href={subLink?.route}
                        style={{
                          color:
                            currentRoute === subLink?.route ? accentColor : "",
                        }}
                        passHref
                        onClick={closeMenu}
                      >
                        <Box mt="4" _hover={{ color: accentColor }}>
                          {subLink?.title}
                        </Box>
                      </Link>
                    ))}
                </Box>
              ))}
            </Flex>
          </Box>
        </DrawerBody>
        <DrawerFooter justifyContent="center">
          <SocialIcons />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SideMenu;
