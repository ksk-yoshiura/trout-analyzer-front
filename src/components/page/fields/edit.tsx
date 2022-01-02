import { 
  Flex
} from '@chakra-ui/react'
import FieldForm from '../../model/fields/FieldForm'

export default function FieldEdit(): JSX.Element {
  return(
    <Flex textAlign="center" w="100wh">
      <FieldForm />
    </Flex>
  )
}