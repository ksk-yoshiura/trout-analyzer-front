import React, { ReactNode, useEffect } from "react";
import {
  Flex
} from "@chakra-ui/react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

type Props = {
  children?: ReactNode;
};

export default function MainContent({ children }: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  // 未ログイン時、ログイン画面、サインアップ画面以外はログインページにリダイレクト対象
  const redirectToList = ['/login', '/sign_up']
  const isRedirectNecessary = redirectToList.indexOf(router.pathname) === -1 ? true: false

  useEffect(() => {
    // 未ログインの場合、ログインページへリダイレクト
    if (!session?.accessToken && session !== undefined && isRedirectNecessary) {
      router.push('/login')
    }
  }, [session])
  
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      w="100%"
      h="100%"
      // bg="gray.800"
      pt={5}
      pb={100}
      px={4}
    >
      {children}
    </Flex>
  );
}