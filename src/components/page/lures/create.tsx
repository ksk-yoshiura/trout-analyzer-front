import { 
  Flex
} from '@chakra-ui/react'
import LureForm from '../../model/lures/LureForm'

export default function LureCreate(): JSX.Element {
  return (
    <Flex textAlign="center" w="100wh">
      <LureForm />
    </Flex>
  )
}