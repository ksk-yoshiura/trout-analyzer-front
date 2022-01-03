import {
  Flex,
  Link
} from '@chakra-ui/react'
import NextLink from "next/link"
import PreparationPlaceModal from '../../model/preparation/PreparationPlaceModal'

export default function PlaceIsReady(): JSX.Element {
  return (
    <>
      <Flex pt={50} w="100%" justifyContent={'center'}>
        <NextLink href="/records/serial_register" passHref>
          <Link w='100%' as={'button'} color='teal'>Place Is Ready</Link>
        </NextLink>
        <PreparationPlaceModal />
      </Flex>
    </>
  );
}