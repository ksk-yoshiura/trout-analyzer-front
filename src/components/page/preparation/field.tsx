import {
  Flex,
  Link
} from '@chakra-ui/react'
import NextLink from "next/link"
import PreparationFieldModal from '../../model/preparation/PreparationFieldModal'
import PreparationFieldSelect from '../../model/preparation/PreparationFieldSelect'

export default function FieldIsReady(): JSX.Element {
  // TODO：New Fieldで登録後登録されたfieldを選択状態にしたい

  return (
    <>
      <Flex py={50} w="100wh" justifyContent={'center'}>
        <PreparationFieldSelect />
        <PreparationFieldModal />
      </Flex>
      <NextLink href="/records/serial_register" passHref>
        <Link w='100%' as={'button'} color='teal'>Field Is Ready</Link>
      </NextLink>
    </>
  );
}