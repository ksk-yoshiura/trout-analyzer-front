import { 
  Flex, Box
} from "@chakra-ui/react";
import SideMenuMobileBox from "./side_menu/SideMenuMobileBox";
import SideMenuPCBox from "./side_menu/SideMenuPCBox";

export default function SideMenu() {
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