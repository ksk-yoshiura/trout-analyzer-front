import { ReactNode } from "react";
import { 
  Flex
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
    <Flex>
      <Header />
      <SideMenu />
      <MainContent>
        { children }
      </MainContent>
    </Flex>
  );
}