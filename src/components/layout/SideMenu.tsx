import {
  Box, Flex, Image
} from "@chakra-ui/react";
import React from 'react'

import SideMenuPCBox from "./side_menu/SideMenuPCBox";

export default function SideMenu() {
  return (
    <Flex
    >
      <Box
        bg="white"
        display={{ base: "none", md: "block" }}
        h="100%"
        w={250}
        px={6}
      >
        <Image src='/logo/logo_second.png' alt='TRANAZA Logo' />
        <SideMenuPCBox />
      </Box>
    </Flex>
  );
}