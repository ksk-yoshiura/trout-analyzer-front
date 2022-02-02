import { 
  Flex
} from '@chakra-ui/react'
import TackleForm from '../../model/tackles/TackleForm'

export default function TackleCreate(): JSX.Element {
  return (
    <Flex textAlign="center" w="100wh">
      <TackleForm />
    </Flex>
  )
}