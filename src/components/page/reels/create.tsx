import {
  Flex
} from '@chakra-ui/react'
import React from 'react'

import ReelForm from '../../model/reels/ReelForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

type ReelData = {
  name?: string;
  companyName?: string;
  type?: string;
  gear?: string;
  image?: string;
}

export default function ReelCreate(): JSX.Element {
  const chosenId = '0'
  const vacantData: ReelData = {
    name: '',
    companyName: '',
    type: '',
    gear: '',
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