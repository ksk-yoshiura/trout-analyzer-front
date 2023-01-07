import {
  Flex
} from '@chakra-ui/react'
import React from 'react'

import type { RodDetail, RodHardnessCondition, RodImage } from '../../../types/rod'
import RodForm from '../../model/rods/RodForm'
import BackToListPageLink from '../../shared/BackToListPageLink'


export default function RodCreate(): JSX.Element {
  const chosenId = '0'
  const vacantData: RodDetail<RodImage, RodHardnessCondition> = {
    ID: '',
    name: '',
    length: '',
    thickness: '',
    CreatedAt: '',
    RodHardnessCondition: { typeName: '' },
    RodTypeId: '',
    companyName: '',
    hardness: '',
    RodImage: {
      ID: '',
      image_file: ''
    }
  }
  return (
    <>
      <BackToListPageLink name={'rods'} />
      <Flex textAlign="center" w="100wh">
        <RodForm chosenId={chosenId} data={vacantData} />
      </Flex>
    </>
  )
}