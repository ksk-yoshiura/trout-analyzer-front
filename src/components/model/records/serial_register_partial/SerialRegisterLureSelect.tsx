import React from 'react';
import {
  Select
} from "@chakra-ui/react";
import useSWR from 'swr'
import { LuresApiResponse } from "../../../../pages/api/lures/type_num/[type_num]"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

type LureTypeProps = {
  lureTypeId: string
  field?: any // TODO : any回避
}

export default function LureSelect(props: LureTypeProps) {
  const { lureTypeId, field } = props

  console.log(field)

  // ルアーデータリスト
  const { data, error } = useSWR<LuresApiResponse, Error>('/api/lures/type_num/' + lureTypeId, fetcher)
  if (error) return <p>Error: {error.message}</p>
  return (
    lureTypeId !== '0' && lureTypeId ?
      <Select {...field} w='100wh' placeholder='Select lure' onChange={(e)=> e.target.value  } >
        {
          data?.lures?.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.name} :{item.color}
              </option>
            )
          })
        }
      </Select> : <></>
  )
}