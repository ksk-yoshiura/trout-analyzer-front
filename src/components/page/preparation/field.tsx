import {
  Flex,
  Link
} from '@chakra-ui/react'
import NextLink from "next/link"
import PreparationFieldModal from '../../model/preparation/PreparationFieldModal'

export default function FieldIsReady(): JSX.Element {
  return (
    <>
      <Flex pt={50} w="100%" justifyContent={'center'}>
        <NextLink href="/records/serial_register" passHref>
          <Link w='100%' as={'button'} color='teal'>Field Is Ready</Link>
        </NextLink>
        <PreparationFieldModal />
      </Flex>
    </>
  );
}