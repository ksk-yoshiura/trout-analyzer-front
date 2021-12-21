import { Box, Flex } from '@chakra-ui/react';

export default function Header(): JSX.Element {
  // TODO：左端にロゴ、右端にログアウトボタン
  return (
    <Flex h={50}>
      <Box w={100}>ロゴ</Box>
      <Box 
        bg="yellow" 
        color="red"
        w="100%"
      >
        Hello, Next.js with Chakra UI
      </Box>
    </Flex>
  );
}