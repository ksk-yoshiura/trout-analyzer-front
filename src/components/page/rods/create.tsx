import {
  Flex
} from '@chakra-ui/react'
import React from 'react'

import RodForm from '../../model/rods/RodForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

type RodData = {
  name?: string;
  companyName?: string;
  hardness?: string;
  length?: string;
  image?: string;
}

export default function RodCreate(): JSX.Element {
  const chosenId = '0'
  const vacantData: RodData = {
    name: '',
    companyName: '',
    hardness: '',
    length: '',
    image: '',
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