import React from 'react'
import { signOut } from "next-auth/react"
import { Box, Flex, Button, Image } from '@chakra-ui/react';
import SideMenuMobileBox from "./side_menu/SideMenuMobileBox";

export default function Header(): JSX.Element {
  return (
    <Flex h={50}>
      <Box 
        w={260}
        pt={2}
        px={1}
      >
        <Image src='/logo.png' alt='TRANAZA Logo' />
      </Box>
      <Box
        bg="teal"
        w="100%"
        align='right'
        pr={5}
        pt={3}
      >
        <Button colorScheme='teal' color='white' variant='link' onClick={() => signOut()}>
          Logout
        </Button>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <SideMenuMobileBox />
      </Box>
    </Flex>
  );
}