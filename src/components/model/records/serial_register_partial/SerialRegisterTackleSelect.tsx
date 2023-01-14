import {
  Select
} from "@chakra-ui/react";
import React from 'react';
import useSWR from 'swr'

import type { TacklesListApiResponse } from "../../../../pages/api/tackles/index"
import Loading from '../../../shared/Loading'

export default function TackleSelect(props: any) {
  const { field } = props
  // APIからデータ取得
  const { data } = useSWR<TacklesListApiResponse, Error>('tackles')
  if (!data) return <Loading />

  return (
    <Select {...field} w='100wh' placeholder='Select Tackle'>
      {
        data.result?.map((item, index) => {
          return (
            <option key={index} value={item.ID}>
              [ROD]：{item.Rod.name} [REEL]：{item.Reel.name} [LINE]：{item.Line.name}
            </option>
          )
        })
      }
    </Select>
  )
}