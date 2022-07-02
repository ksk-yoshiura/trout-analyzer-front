import {
  Flex
} from '@chakra-ui/react'
import React from 'react'

import LineForm from '../../model/lines/LineForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

type LineData = {
  imageUrl: string
  lineTypeId: string
  name: string
  companyName: string
  thickness: string
}

export default function LineCreate(): JSX.Element {
  const chosenId = '0'
  const vacantData: LineData = {
    imageUrl: '',
    lineTypeId: '',
    name: '',
    companyName: '',
    thickness: '',
  }
  return (
    <>
      <BackToListPageLink name={'lines'} />
      <Flex textAlign="center" w="100wh">
        <LineForm chosenId={chosenId} data={vacantData} />
      </Flex>
    </>
  )
}