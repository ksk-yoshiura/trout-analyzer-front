import React, { ReactNode } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import {
  Flex, Box
} from "@chakra-ui/react";
import Header from "./Header";
import MainContent from "./MainContent";
import SideMenu from "./SideMenu";
import Loading from '../shared/Loading'

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  const { data: session } = useSession();
  const router = useRouter();
  const isReady = router.isReady;
  if (!isReady) {
    return <Loading />
  }

  // 未ログインの場合、ログインページへリダイレクト
  if (!session && router.pathname !== '/login') {
    router.push('/login')
  }

  return (
    session ? // ログイン状態か
      <Box>
        <Header />
        <Flex>
          <SideMenu />
          <MainContent>
            {children}
          </MainContent>
        </Flex>
      </Box>
      : 
      <MainContent>
        {children}
      </MainContent>
  );
}