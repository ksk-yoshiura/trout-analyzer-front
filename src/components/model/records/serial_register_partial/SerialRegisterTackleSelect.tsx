import React from 'react';
import {
  Select
} from "@chakra-ui/react";
import useSWR from 'swr'
import Loading from '../../../shared/Loading'
import { TacklesApiResponse } from "../../../../pages/api/tackles/index"

export default function TackleSelect(props: any) {
  const { field } = props
  // APIからデータ取得
  const { data, error } = useSWR<TacklesApiResponse, Error>('tackles')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  return (
    <Select {...field} w='100wh' placeholder='Select Tackle'>
      {
        data.result?.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.rod.name}:{item.reel.name}:{item.line.name}
            </option>
          )
        })
      }
    </Select>
  )
}