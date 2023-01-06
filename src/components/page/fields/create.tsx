import {
  Flex
} from '@chakra-ui/react'
import React from 'react'

import type { FieldDetail, FieldImage } from '../../../types/field'
import FieldForm from '../../model/fields/FieldForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

export default function FieldCreate(): JSX.Element {
  const chosenId = '0'
  const vacantData: FieldDetail<FieldImage> = {
    ID: '',
    lastVisitedAt: '',
    name: '',
    address: '',
    CreatedAt: '',
    FieldImage: {
      ID: '',
      CreatedAt: '',
      field_id: 0,
      image_file: '',
    }
  }
  return (
    <>
      <BackToListPageLink name={'fields'} />
      <Flex textAlign="center" w="100wh">
        <FieldForm chosenId={chosenId} data={vacantData} />
      </Flex>
    </>
  )
}