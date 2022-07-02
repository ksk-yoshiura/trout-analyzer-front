import {
  Box,
  Flex
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"
import type { ReactNode } from "react";
import React from "react";

import Loading from '../shared/Loading'
import Header from "./Header";
import MainContent from "./MainContent";
import SideMenu from "./SideMenu";

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