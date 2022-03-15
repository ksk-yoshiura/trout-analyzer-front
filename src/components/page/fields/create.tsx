import {
  Flex
} from '@chakra-ui/react'
import FieldForm from '../../model/fields/FieldForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

export default function FieldCreate(): JSX.Element {
  const chosenId = '0'
  const data = {}
  return (
    <>
      <BackToListPageLink name={'fields'} />
      <Flex textAlign="center" w="100wh">
        <FieldForm chosenId={chosenId} data={data} />
      </Flex>
    </>
  )
}