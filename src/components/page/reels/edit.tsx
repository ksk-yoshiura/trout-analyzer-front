import { 
  Flex
} from '@chakra-ui/react'
import ReelForm from '../../model/reels/ReelForm'

export default function ReelEdit(): JSX.Element {
  return (
    <Flex textAlign="center" w="100wh">
      <ReelForm />
    </Flex>
  )
}