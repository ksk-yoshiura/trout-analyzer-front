import {
  Flex
} from '@chakra-ui/react'
import ReelForm from '../../model/reels/ReelForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

type ReelData = {
  name?: string;
  company?: string;
  type?: string;
  gear?: string;
  image?: string;
}

export default function ReelCreate(): JSX.Element {
  const chosenId = '0'
  const data: ReelData = {
    name: '',
    company: '',
    type: '',
    gear: '',
  }
  return (
    <>
      <BackToListPageLink name={'reels'} />
      <Flex textAlign="center" w="100wh">
        <ReelForm />
      </Flex>
    </>
  )
}