import React from 'react'
import { signOut } from "next-auth/react"
import { Box, Flex, Button, Image, LinkOverlay } from '@chakra-ui/react';
import SideMenuMobileBox from "./side_menu/SideMenuMobileBox";

export default function Header(): JSX.Element {
  return (
    <Flex h={55} borderColor='gray.500' borderBottom={'1px'}>
      <LinkOverlay href="/">
        <Box
          maxWidth="260"
          pt={1}
          px={1}
        >
          <Image src='/logo_teal.png' alt='TRANAZA Logo' />
        </Box>
      </LinkOverlay>
      <Box
        // bg="teal"
        w="100%"
        align='right'
        pr={5}
        pt={3}
      >
        <Button colorScheme='teal' color='teal' variant='link' onClick={() => signOut()}>
          Logout
        </Button>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <SideMenuMobileBox />
      </Box>
    </Flex>
  );
}