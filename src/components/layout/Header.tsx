import { Box, Button, Flex, Image } from '@chakra-ui/react';
import NextLink from "next/link"
import { useRouter } from "next/router"
import { signOut } from "next-auth/react"
import React from 'react'

import SideMenuMobileBox from "./side_menu/SideMenuMobileBox";

export default function Header(): JSX.Element {
  const router = useRouter();

  // ログイン、サインアップ、釣果登録ページはヘッダー非表示
  const noRedirectLinkList = [
    '/login', '/sign_up', '/records/serial_register/[record_id]'
  ]
  // URLチェック
  const isHeaderNotNecessary = noRedirectLinkList.indexOf(router.pathname) >= 0 ? false : true

  return (
    isHeaderNotNecessary ?
      <Box
        display={{ base: "block", md: "none" }}  >
        <Flex
          h={55}
          borderColor='gray.500'
          borderBottom={'1px'}
        >
          <NextLink href="/" passHref>
            <Box
              w={320}
              pt={1}
              px={1}
            >
              <Image src='/logo/logo_second.png' alt='TRANAZA Logo' />
            </Box>
          </NextLink>
          <Box
            w="100%"
            align='right'
            pr={5}
            pt={3}
          >
            <Button colorScheme='teal' color='teal' variant='link' onClick={() => { return signOut() }}>
              Logout
            </Button>
          </Box>
          <Box display={{ base: "block", md: "none" }}>
            <SideMenuMobileBox />
          </Box>
        </Flex>
      </Box>
      : <></>
  );
}