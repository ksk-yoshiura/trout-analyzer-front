import { ReactNode } from "react";
import { 
  Flex, Box
} from "@chakra-ui/react";
import SideMenuMobileBox from "./SideMenuMobileBox";
import SideMenuPCBox from "./SideMenuPCBox";

export default function SideMenuMain() {
  return (
    <Flex
    >
      <Box 
        bg="white" 
        display={{ base: "none", md: "block" }} 
        h="100vh" 
        w={300} 
        px={6}
      >
        <SideMenuPCBox />
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <SideMenuMobileBox />
      </Box>
    </Flex>
  );
}