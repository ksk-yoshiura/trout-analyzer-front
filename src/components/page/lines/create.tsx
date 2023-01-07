import {
  Flex
} from '@chakra-ui/react'
import React from 'react'

import type { LineCondition, LineDetail, LineImage } from '../../../types/line'
import LineForm from '../../model/lines/LineForm'
import BackToListPageLink from '../../shared/BackToListPageLink'


export default function LineCreate(): JSX.Element {
  const chosenId = '0'
  const vacantData: LineDetail<LineImage, LineCondition> = {
    ID: '',
    name: '',
    thickness: '',
    CreatedAt: '',
    LineCondition: {
      typeName: ''
    },
    lineTypeId: '',
    companyName: '',
    LineImage: {
      ID: '',
      image_file: '',
    }
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