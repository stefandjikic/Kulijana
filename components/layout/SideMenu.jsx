import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";

const SideMenu = ({ isOpen, onClose, toggleColorMode, colorMode }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton mt="2" />
        <DrawerHeader borderBottom="1px" borderColor="blackAlpha.300">
          <Logo size="25px" />
        </DrawerHeader>

        <DrawerBody>
          <Flex mt="4" justifyContent="space-between" alignItems="center">
            <Box fontWeight="bold" fontSize="sm">
              Tamna tema
            </Box>
            <Switch
              onChange={toggleColorMode}
              isChecked={colorMode === "dark" ? true : false}
            />
          </Flex>
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SideMenu;