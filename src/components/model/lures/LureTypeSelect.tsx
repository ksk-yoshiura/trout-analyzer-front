import {
  Select,
} from '@chakra-ui/react'
import useSWR from 'swr'
import { LureTypesApiResponse } from "../../../pages/api/lure_types/index"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

type TypeProp = {
  field? :any
}

export default function LureTypeSelect(props: TypeProp) {
  // LureFormのeditで選択されたタイプ
  const { field } = props
  // APIからデータ取得
  const { data, error } = useSWR<LureTypesApiResponse, Error>('/api/lure_types/', fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  return (
    <Select {...field} w={150} placeholder='Lure Type'>
      {
        data.lure_types?.map((item, index) => {
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