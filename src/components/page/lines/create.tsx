import { 
  Flex
} from '@chakra-ui/react'
import LineForm from '../../model/lines/LineForm'

export default function LineCreate(): JSX.Element {
  return (
    <Flex textAlign="center" w="100wh">
      <LineForm />
    </Flex>
  )
}