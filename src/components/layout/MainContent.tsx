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
  
  useEffect(() => {
    // 未ログインの場合、ログインページへリダイレクト
  if (session !== undefined && router.pathname !== '/login') {
    router.push('/login')
  }
  }, [session])
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      w="100%"
      h="100vh"
      // bg="gray.800"
      py={10}
      px={4}
    >
      {children}
    </Flex>
  );
}