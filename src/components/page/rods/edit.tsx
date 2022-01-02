import { 
  Flex
} from '@chakra-ui/react'
import RodForm from '../../model/rods/RodForm'

export default function RodEdit(): JSX.Element {
  return (
    <Flex textAlign="center" w="100wh">
      <RodForm />
    </Flex>
  )
}