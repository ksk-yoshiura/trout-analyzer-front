import {
  Flex,
  Button,
  Link
} from '@chakra-ui/react'
import NextLink from "next/link"

export default function PlaceIsReady(): JSX.Element {
  return (
    <>
      <Flex pb={5} w="100%">
        <NextLink href="/records/serial_create" passHref>
          <Link  pl={10} pr={10} colorScheme='teal'>Place Is Ready</Link>
        </NextLink>
        <Button  pl={10} pr={10} colorScheme='teal'>New Place</Button>
      </Flex>
    </>
  );
}