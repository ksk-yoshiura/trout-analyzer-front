import React from 'react'
import {
  Select,
} from '@chakra-ui/react'
import Loading from '../../../shared/Loading'
import useSWR from 'swr'
import { FieldsApiResponse } from "../../../../pages/api/fields/index"

export default function FieldSelect(props: any) {
  const { field, setField } = props
  // APIからデータ取得
  const { data, error } = useSWR<FieldsApiResponse, Error>('fields')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  return (
    <Select {...field} mr={5} w="100%" placeholder='Select Field' onChange={() => setField(true)}>
      {
        data.result?.map((item, index) => {
          return (
            <option key={index} value={item.ID}>
              {item.name}
            </option>
          )
        })
      }
    </Select>
  )
};