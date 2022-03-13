import React from 'react'
import {
  Select,
} from '@chakra-ui/react'
import Loading from './Loading'
import useSWR from 'swr'
import { ToolConditionApiResponse } from "../../pages/api/tool_conditions/type_num/[type_num]"

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

export default function TooConditionTypeSelect(props: TypeProps) {
  // タイプナンバー
  const { typeNum, field } = props
  // APIからデータ取得
  const { data, error } = useSWR<ToolConditionApiResponse, Error>('tool_conditions/type_num/' + typeNum)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  return (
    <Select {...field} w={200} placeholder={'Select '+title[typeNum - 1]} >
      {
        data.result?.map((item, index) => {
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