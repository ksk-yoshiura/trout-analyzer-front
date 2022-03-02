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
  // TODO：要解消
  // Warning: Expected server HTML to contain a matching <div> in <div>.
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