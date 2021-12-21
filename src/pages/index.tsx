// pages/index.tsx
import {
  Stack,
  Heading,
  Box
} from '@chakra-ui/react';

export default function Index(): JSX.Element {
  return (
    <>
    <Heading color="white">Title</Heading>
    <Stack spacing={10}>
      <Box color="red">
        Hello, Next.js with Chakra UI
      </Box>
      <Box color="red">
        Hello, Next.js with Chakra UI
      </Box>
      <Box color="red">
        Hello, Next.js with Chakra UI
      </Box>
    </Stack>
    </>
  );
}
