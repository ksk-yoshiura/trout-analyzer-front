import {
  Flex
} from '@chakra-ui/react'
import React from 'react'

import type { GearCondition, ReelDetail, ReelImage, TypeNumberCondition } from '../../../types/reel'
import ReelForm from '../../model/reels/ReelForm'
import BackToListPageLink from '../../shared/BackToListPageLink'



export default function ReelCreate(): JSX.Element {
  const chosenId = '0'
  const vacantData: ReelDetail<ReelImage, GearCondition, TypeNumberCondition> = {
    ID: '',
    name: '',
    CreatedAt: '',
    companyName: '',
    gearId: '',
    typeNumberId: '',
    ReelImage: {
      ID: '',
      image_file: ''
    },
    GearCondition: { typeName: '' },
    TypeNumberCondition: { typeName: '' }
  }
  return (
    <>
      <BackToListPageLink name={'reels'} />
      <Flex textAlign="center" w="100wh">
        <ReelForm data={vacantData} chosenId={chosenId} />
      </Flex>
    </>
  )
}