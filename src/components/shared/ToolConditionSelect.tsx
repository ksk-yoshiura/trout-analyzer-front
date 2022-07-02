import {
  Select,
} from '@chakra-ui/react'
import React from 'react'
import useSWR from 'swr'

import type { ToolConditionApiResponse } from "../../pages/api/tool_conditions/type_num/[type_num]"
import Loading from './Loading'

// タイプ
type TypeProps = {
  typeNum: number
  field?: any
}

// 各タイプのタイトル
const title = [
  'Hardness',
  'Gear',
  'Type',
  'LineType'
]

// 各タイプのURL
const typeURL = [
  'default',
  'rod_hardness',
  'reel_gear',
  'reel_type',
  'line_type'
]


export default function TooConditionTypeSelect(props: TypeProps) {
  // タイプナンバー
  const { typeNum, field } = props
  // APIからデータ取得
  const { data, error } = useSWR<ToolConditionApiResponse, Error>('tool_conditions/' + typeURL[typeNum])
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  return (
    <Select {...field} w={200} placeholder={'Select ' + title[typeNum - 1]} >
      {
        data.result?.map((item, index) => {
          return (
            <option key={index} value={item.ID}>
              {item.typeName}
            </option>
          )
        })
      }
    </Select>
  )
};