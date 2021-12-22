import {
  Box,
  Button,
  Stack,
  Link,
  Flex
} from "@chakra-ui/react";
import RegisterMenuLinkList from './RegisterMenuLinkList'
import CheckRecordsLinkList from './CheckRecordsLinkList'
import SNSLinkButton from './SNSLinkButton'

export default function SideMenuContentsPC() {
  return (
    <Flex
      flexDirection="column"
      h="100%"
      justifyContent="space-between"
    >
      <Box>
        <Stack spacing='23px' pt={4} display="flex">
          <Link href="/">
            <Button
              colorScheme='teal'
              variant='ghost'
              fontWeight='bold'
              fontSize='20px'
            >
              Trout Analyzer
            </Button>
          </Link>
          <RegisterMenuLinkList />
          <CheckRecordsLinkList />
        </Stack>
      </Box>
      <Box
        mb={5}
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
      >
        <SNSLinkButton />
      </Box>
    </Flex>
  )
};