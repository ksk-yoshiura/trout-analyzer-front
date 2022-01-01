import {
  Flex
} from '@chakra-ui/react'
import RecordPatternsList from '../../model/records/RecordPatternsList'

export default function RecordsList(): JSX.Element {
  return (
    <>
      <Flex pb={5} w="100%">
      </Flex>
      <RecordPatternsList />
    </>
  );
}