import React from 'react'
import {
  Select,
} from '@chakra-ui/react'
import Loading from '../../shared/Loading'
import useSWR from 'swr'
import { LureTypesApiResponse } from "../../../pages/api/lure_types/index"

type TypeProp = {
  field? :any
}

export default function LureTypeSelect(props: TypeProp) {
  // LureFormのeditで選択されたタイプ
  const { field } = props
  // APIからデータ取得
  const { data, error } = useSWR<LureTypesApiResponse, Error>('/api/lure_types/')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  return (
    <Select {...field} w={150} placeholder='Lure Type'>
      {
        data.lure_types?.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.type_name}
            </option>
          )
        })
      }
    </Select>
  )
};