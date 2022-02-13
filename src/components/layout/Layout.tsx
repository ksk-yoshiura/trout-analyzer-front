import React, { ReactNode } from "react";
import { 
  Flex, Box
} from "@chakra-ui/react";
import Header from "./Header";
import MainContent from "./MainContent";
import SideMenu from "./SideMenu";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  // TODO：ここでレスポンシブ調整
  return (
    <Box>
      <Header />
      <Flex>
        <SideMenu />
        <MainContent>
          { children }
        </MainContent>
      </Flex>
    </Box>
  );
}