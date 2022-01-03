import {
  Flex,
  Button,
  Link
} from '@chakra-ui/react'
import NextLink from "next/link"

export default function IsTackleReady(): JSX.Element {
  return (
    <>
      <Flex pt={50} w="100wh" justifyContent={'center'}>
        <NextLink href="/tackles/create" passHref>
          <Button mr={5} pl={10} pr={10} colorScheme='teal'>New Tackles</Button>
        </NextLink>
        <NextLink href="/preparation/field" passHref>
          <Link w='100%' as={'button'} color='teal'>Tackle Is Ready</Link>
        </NextLink>
      </Flex>
    </>
  );
}