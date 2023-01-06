import {
  Container
} from "@chakra-ui/react";
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import type { ReactNode } from "react";
import React, { useEffect } from "react";

type Props = {
  children?: ReactNode;
};

export default function MainContent({ children }: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  // 未ログイン時、ログイン画面、サインアップ画面以外はログインページにリダイレクト対象
  const redirectToList = ['/login', '/sign_up']
  const isRedirectNecessary = redirectToList.indexOf(router.pathname) === -1 ? true : false

  useEffect(() => {
    // 未ログインの場合、ログインページへリダイレクト
    if (!session?.accessToken && session !== undefined && isRedirectNecessary) {
      router.push('/login')
    }
  }, [session])

  return (
    <Container
      ContainerDirection="column"
      alignItems="center"
      w="100%"
      h="100%"
      pt={5}
      pb={100}
      px={20}
    >
      {children}
    </Container>
  );
}