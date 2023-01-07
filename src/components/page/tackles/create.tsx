import {
  Flex
} from '@chakra-ui/react'
import React from 'react'

import type { LineCondition, LineDetail, LineImage } from '../../../types/line'
import type { GearCondition, ReelDetail, ReelImage, TypeNumberCondition } from '../../../types/reel'
import type { RodDetail, RodHardnessCondition, RodImage } from '../../../types/rod'
import type { TackleDetail } from '../../../types/tackle'
import TackleForm from '../../model/tackles/TackleForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

export default function TackleCreate(): JSX.Element {
  const vacantData: TackleDetail<RodDetail<RodImage, RodHardnessCondition>, ReelDetail<ReelImage, GearCondition, TypeNumberCondition>, LineDetail<LineImage, LineCondition>> = {
    ID: '',
    CreatedAt: '',
    Rod: {
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
    },
    Reel: {
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
    },
    Line: {
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
  }
  return (
    <>
      <BackToListPageLink name={'tackles'} />
      <Flex textAlign="center" w="100wh">
        <TackleForm tackleData={vacantData} />
      </Flex>
    </>
  )
}