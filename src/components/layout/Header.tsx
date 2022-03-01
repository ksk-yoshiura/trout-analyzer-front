import React from 'react'
import { signOut } from "next-auth/react"
import { Box, Flex, Button } from '@chakra-ui/react';
import SideMenuMobileBox from "./side_menu/SideMenuMobileBox";

export default function Header(): JSX.Element {
  return (
    <Flex h={50}>
      <Box 
        w={260}
        pl={5}
        pt={3}
      >LOGO</Box>
      <Box
        bg="yellow"
        color="red"
        w="100%"
        align='right'
        pr={5}
        pt={3}
      >
        <Button colorScheme='teal' variant='link' onClick={() => signOut()}>
          Logout
        </Button>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <SideMenuMobileBox />
      </Box>
    </Flex>
  );
}