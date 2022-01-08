import {
  Flex
} from '@chakra-ui/react'
import LureForm from '../../model/lures/LureForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

export default function LureCreate(): JSX.Element {
  return (
    <>
      <BackToListPageLink name={'lures'} />
      <Flex textAlign="center" w="100wh">
        <LureForm />
      </Flex>
    </>
  )
}