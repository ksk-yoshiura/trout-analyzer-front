import {
  Flex
} from '@chakra-ui/react'
import LineForm from '../../model/lines/LineForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

type LineData = {
  imageUrl?: string
  CreatedAt?: string
  lineType?: string
  name?: string
  company?: string
  thickness?: number
}

export default function LineCreate(): JSX.Element {
  const chosenId = '0'
  const data: LineData = { 
    imageUrl: '',
    CreatedAt: '',
    lineType: '',
    name: '',
    company: '',
    thickness: 0, 
  }
  return (
    <>
      <BackToListPageLink name={'lines'} />
      <Flex textAlign="center" w="100wh">
        <LineForm chosenId={chosenId} data={data} />
      </Flex>
    </>
  )
}