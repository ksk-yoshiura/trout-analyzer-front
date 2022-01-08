import { 
  Flex
} from '@chakra-ui/react'
import ReelForm from '../../model/reels/ReelForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

export default function ReelCreate(): JSX.Element {
  return (
    <>
      <BackToListPageLink name={'reels'} />
      <Flex textAlign="center" w="100wh">
        <ReelForm />
      </Flex>
    </>
  )
}