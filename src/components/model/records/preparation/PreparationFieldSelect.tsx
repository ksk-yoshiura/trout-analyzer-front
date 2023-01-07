import {
  Select
} from '@chakra-ui/react'
import React from 'react'
import useSWR from 'swr'

import type { FieldsListApiResponse } from "../../../../pages/api/fields/index"
import Loading from '../../../shared/Loading'

export default function FieldSelect(props: any) {
  const { field } = props
  // APIからデータ取得
  const { data } = useSWR<FieldsListApiResponse, Error>('fields')
  if (!data) return <Loading />

  return (
    <>
      <Select
        {...field}
        mr={5}
        w="100%"
        placeholder='Select Field'
      >
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
    </>
  )
};