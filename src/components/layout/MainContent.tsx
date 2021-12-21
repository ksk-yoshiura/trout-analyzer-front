import { ReactNode } from "react";
import { 
  Flex
} from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

export default function MainContent({ children }: Props) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      w="100%"
      h="100vh"
      bg="gray.800"
      pb={10}
      pt={10}
    >
      {children}
    </Flex>
  );
}