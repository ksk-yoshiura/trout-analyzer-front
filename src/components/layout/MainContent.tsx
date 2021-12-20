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
      justifyContent="center"
      h="100%"
      bg="gray.800"
      pb={10}
      pt={10}
    >
      {children}
    </Flex>
  );
}