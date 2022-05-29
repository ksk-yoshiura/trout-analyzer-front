import { Heading, Text, VStack, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CustomErrorPage() {
  const router = useRouter()

  return (
    <VStack spacing="10">
      <Heading fontSize="5xl" fontWeight="medium">
        Page not found
      </Heading>
      <Text fontSize="2xl">{router.asPath} Page does not exist</Text>
      <Link href="/">
        <Box _hover={{ cursor: 'pointer', color: 'blue.400' }} color="blue.600">
          Go back to home
        </Box>
      </Link>
    </VStack>
  )
}