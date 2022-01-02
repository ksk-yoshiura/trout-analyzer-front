import {
  Flex,
  Button,
  Link
} from '@chakra-ui/react'
import NextLink from "next/link"

export default function PlaceIsReady(): JSX.Element {
  return (
    <>
      <Flex pt={50} w="100%" justifyContent={'center'}>
        <NextLink href="/records/serial_register" passHref>
          <Link w='100%' as={'button'} color='teal'>Place Is Ready</Link>
        </NextLink>
        <Button  mr={5} pl={10} pr={10} colorScheme='teal'>New Place</Button>
      </Flex>
    </>
  );
}