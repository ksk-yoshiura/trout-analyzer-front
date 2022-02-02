import {
  Flex
} from '@chakra-ui/react'
import RecordPatternDetailForm from '../../model/records/RecordPatternDetailForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

export default function RecordEdit(): JSX.Element {
  return (
    <>
      <BackToListPageLink name={'rods'} />
      <Flex textAlign="center" w="100wh">
        <RecordPatternDetailForm />
      </Flex>
    </>
  )
}