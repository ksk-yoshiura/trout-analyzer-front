import React from 'react'
import { 
  Flex
} from '@chakra-ui/react'
import TackleForm from '../../model/tackles/TackleForm'

type TackleData = {
  ID: string
  CreatedAt: string
  Rod: {
    ID: string
    name: string
    imageUrl: string
    imageAlt: string
    length: string
    RodHardnessCondition: { typeName: string }
    companyName: string
    CreatedAt: string
  },
  Reel: {
    ID: string
    name: string
    imageUrl: string
    imageAlt: string
    TypeNumberCondition: { typeName: string }
    GearCondition: { typeName: string }
    companyName: string
    CreatedAt: string
  },
  Line: {
    ID: string
    name: string
    imageUrl: string
    imageAlt: string
    thickness: string
    lineType: string
    companyName: string
    CreatedAt: string
  }
}

export default function TackleCreate(): JSX.Element {
  const vacantData:TackleData = {
    ID: '',
    CreatedAt: '',
    Rod: {
      ID: '',
      name: '',
      imageUrl: '',
      imageAlt: '',
      length: '',
      RodHardnessCondition: { typeName: '' },
      companyName: '',
      CreatedAt: '',
    },
    Reel: {
      ID: '',
      name: '',
      imageUrl: '',
      imageAlt: '',
      TypeNumberCondition: { typeName: '' },
      GearCondition: { typeName: '' },
      companyName: '',
      CreatedAt: '',
    },
    Line: {
      ID: '',
      name: '',
      imageUrl: '',
      imageAlt: '',
      thickness: '',
      lineType: '',
      companyName: '',
      CreatedAt: '',
    }
  }
  return (
    <Flex textAlign="center" w="100wh">
      <TackleForm tackleData={vacantData} />
    </Flex>
  )
}