import {
  Select,
} from '@chakra-ui/react'
import useSWR from 'swr'
import { FieldsApiResponse } from "../../../pages/api/fields/index"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

export default function FieldSelect() {
  // APIからデータ取得
  const { data, error } = useSWR<FieldsApiResponse, Error>('/api/fields/', fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  return (
    <Select mr={5} w="100%" placeholder='Select Field'>
      {
        data.fields?.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.name}
            </option>
          )
        })
      }
    </Select>
  )
};