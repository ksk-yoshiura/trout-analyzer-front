import React from 'react';
import {
  Select
} from "@chakra-ui/react";
import useSWR from 'swr'
import { LuresApiResponse } from "../../../../pages/api/lures/type_num/[type_num]"

type LureTypeProps = {
  lureTypeId: string
  field?: any // TODO : any回避
}

export default function LureSelect(props: LureTypeProps) {
  const { lureTypeId, field } = props

  // ルアーデータリスト
  const { data, error } = useSWR<LuresApiResponse, Error>('lures?type_id=' + lureTypeId)
  if (error) return <p>Error: {error.message}</p>
  return (
    lureTypeId !== '0' && lureTypeId ?
      <Select {...field} w='100wh' placeholder='Select lure' >
        {
          data?.result?.map((item, index) => {
            return (
              <option key={index} value={item.ID}>
                {item.name} :{item.Color.name}
              </option>
            )
          })
        }
      </Select> : <></>
  )
}