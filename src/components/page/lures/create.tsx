import {
  Flex
} from '@chakra-ui/react'
import React from 'react'

import type { Color } from '../../../types/color'
import type { LureDetail, LureImage } from '../../../types/lure'
import type { LureType } from '../../../types/lure_type'
import LureForm from '../../model/lures/LureForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

export default function LureCreate(): JSX.Element {
  const chosenId = '0'
  const vacantData: LureDetail<LureType, LureImage, Color> = {
    ID: '',
    name: '',
    CreatedAt: '',
    companyName: '',
    lureTypeId: '',
    color: '',
    weight: '',
    frequency: '',
    LureType: {
      ID: '',
      typeName: ''
    },
    LureImage: {
      ID: '',
      image_file: ''
    },
    Color: {
      ID: '',
      code: '',
      name: ''
    }
  }
  return (
    <>
      <BackToListPageLink name={'lures'} />
      <Flex textAlign="center" w="100wh">
        <LureForm chosenId={chosenId} data={vacantData} />
      </Flex>
    </>
  )
}