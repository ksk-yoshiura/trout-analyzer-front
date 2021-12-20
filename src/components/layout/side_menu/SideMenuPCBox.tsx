import {
  Box,
  Text,
  Stack,
  Link,
  Flex
} from "@chakra-ui/react";
import RegisterMenuLinkList from './RegisterMenuLinkList'
import SNSLinkButton from './SNSLinkButton'

export default function SideMenuContentsPC() {
  return (
    <Flex
      flexDirection="column"
      minH="100vh"
      justifyContent="space-between"
    >
      <Box>
      <Stack spacing='23px' pt={4} display="flex">
        <Text fontWeight='bold' fontSize='20px'>
          <Link href="/">
            Trout Analyzer
          </Link>
        </Text>
        <RegisterMenuLinkList />
      </Stack>
      </Box>
      <Box 
        mb={5}
        display="flex" 
        justifyContent="space-around"
      >
        <SNSLinkButton />
      </Box>
    </Flex>
  )
};