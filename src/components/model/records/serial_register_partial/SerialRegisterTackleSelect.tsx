import React from 'react';
import {
  Select
} from "@chakra-ui/react";
import useSWR from 'swr'
import { TacklesApiResponse } from "../../../../pages/api/tackles/index"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

export default function TackleSelect(props: any) {
  const { field } = props
  // APIからデータ取得
  const { data, error } = useSWR<TacklesApiResponse, Error>('/api/tackles/', fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  return (
    <Select {...field} w='100wh' placeholder='Select Tackle'>
      {
        data.tackles?.map((item, index) => {
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