import React, { useState } from 'react'
import {
  Select,
} from '@chakra-ui/react'
import Loading from '../../../shared/Loading'
import useSWR from 'swr'
import { FieldsApiResponse } from "../../../../pages/api/fields/index"

export default function FieldSelect(props: any) {
  const { field } = props
  const [FieldTypeId, setFieldTypeId] = useState('0')
  // APIからデータ取得
  const { data, error } = useSWR<FieldsApiResponse, Error>('fields')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  function changeHandler(event: React.FormEvent<HTMLSelectElement>) {
    const { target } = event;
    if (!(target instanceof HTMLSelectElement)) {
      return; // or throw new TypeError();
    }
    const targetFieldTypeId = target.value
    setFieldTypeId(targetFieldTypeId)
  }

  return (
    <Select {...field} onChange={event => changeHandler(event)} mr={5} w="100%" placeholder='Select Field'>
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