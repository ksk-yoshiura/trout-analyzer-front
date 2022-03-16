import {
  Flex
} from '@chakra-ui/react'
import LureForm from '../../model/lures/LureForm'
import BackToListPageLink from '../../shared/BackToListPageLink'

type LureType = {
  ID: string
  typeName: string
}

type LureData = {
  ID: string
  imageUrl: string
  imageAlt: string
  CreatedAt: string
  lastUsedAt: string
  LureType: LureType
  name: string
  companyName: string
  color: string
  weight: string
  frequency: string
}

export default function LureCreate(): JSX.Element {
  const chosenId = '0'
  const data: LureData = { 
    ID: '',
    imageUrl: '',
    imageAlt: '',
    CreatedAt: '',
    lastUsedAt: '',
    LureType: { ID: '', typeName: '' },
    name: '',
    companyName: '',
    color: '',
    weight: '',
    frequency: '', 
  }
  return (
    <>
      <BackToListPageLink name={'lures'} />
      <Flex textAlign="center" w="100wh">
        <LureForm chosenId={chosenId} data={data} />
      </Flex>
    </>
  )
}