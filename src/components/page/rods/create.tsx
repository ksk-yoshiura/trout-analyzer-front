import {
  Flex
} from '@chakra-ui/react'
import RodForm from '../../model/rods/RodForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

export default function RodCreate(): JSX.Element {
  return (
    <>
      <BackToListPageLink name={'rods'} />
      <Flex textAlign="center" w="100wh">
        <RodForm />
      </Flex>
    </>
  )
}