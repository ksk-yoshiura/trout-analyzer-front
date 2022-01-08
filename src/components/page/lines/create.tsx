import {
  Flex
} from '@chakra-ui/react'
import LineForm from '../../model/lines/LineForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

export default function LineCreate(): JSX.Element {
  return (
    <>
      <BackToListPageLink name={'lines'} />
      <Flex textAlign="center" w="100wh">
        <LineForm />
      </Flex>
    </>
  )
}