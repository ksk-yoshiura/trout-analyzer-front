import {
  Flex
} from '@chakra-ui/react'
import React from 'react'

import FieldForm from '../../model/fields/FieldForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

type FieldData = {
  name?: string;
  address?: string;
  image?: string;
}

export default function FieldCreate(): JSX.Element {
  const chosenId = '0'
  const vacantData: FieldData = { name: '', address: '' }
  return (
    <>
      <BackToListPageLink name={'fields'} />
      <Flex textAlign="center" w="100wh">
        <FieldForm chosenId={chosenId} data={vacantData} />
      </Flex>
    </>
  )
}