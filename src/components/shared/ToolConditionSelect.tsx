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
}

export default function TooConditionTypeSelect(props: TypeProps) {
  // タイプナンバー
  const { typeNum } = props
  // APIからデータ取得
  const { data, error } = useSWR<ToolConditionApiResponse, Error>('/api/tool_conditions/type_num/' + typeNum, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  return (
    <Select w={150} placeholder='Select Type'>
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