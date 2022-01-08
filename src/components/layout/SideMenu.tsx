import { 
  Flex, Box
} from "@chakra-ui/react";
import SideMenuPCBox from "./side_menu/SideMenuPCBox";

export default function SideMenu() {
  return (
    <Flex
    >
      <Box 
        bg="white" 
        display={{ base: "none", md: "block" }} 
        h="100%" 
        w={250} 
        px={6}
      >
        <SideMenuPCBox />
      </Box>
    </Flex>
  );
}