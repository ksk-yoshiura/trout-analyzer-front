import {
  Select,
} from '@chakra-ui/react'
import useSWR from 'swr'
import { ToolConditionApiResponse } from "../../pages/api/tool_conditions/type_num/[type_num]"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

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
  const { data, error } = useSWR<ToolConditionApiResponse, Error>('/api/tool_conditions/type_num/' + typeNum, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  return (
    <Select {...field} w={200} placeholder={'Select '+title[typeNum - 1]} >
      {
        data.tool_condition?.map((item, index) => {
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