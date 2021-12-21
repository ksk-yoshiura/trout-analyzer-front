import { Box, Flex, Button } from '@chakra-ui/react';

export default function Header(): JSX.Element {
  // TODO：左端にロゴ、右端にログアウトボタン
  return (
    <Flex h={50}>
      <Box 
        w={260}
        pl={5}
        pt={3}
      >LOGO</Box>
      <Box
        bg="yellow"
        color="red"
        w="100%"
        align='right'
        pr={5}
        pt={3}
      >
        <Button colorScheme='teal' variant='link'>
          Logout
        </Button>
      </Box>
    </Flex>
  );
}