import { useState, useEffect } from 'react'
import {
  Select
} from "@chakra-ui/react";
import LureSelect from './SerialRegisterLureSelect'
import useSWR from 'swr'
import { LureTypesApiResponse } from "../../../../pages/api/lure_types/index"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

export default function LureTypeSelect(field: any) {
  const [lureTypeId, setLureTypeId] = useState('0')

  // APIからデータ取得
  // ルアータイプリストデータ
  const { data, error } = useSWR<LureTypesApiResponse, Error>('/api/lure_types', fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>
  
  function changeHandler(event: any) { // TODO：anyで一旦退避
    const { target } = event;
    if (!(target instanceof HTMLSelectElement)) {
      return; // or throw new TypeError();
    }
    const targetLureTypeId = target.value
    setLureTypeId(targetLureTypeId)
  }

  return (
    <>
      <Select mb={2} w={130} onChange={event => changeHandler(event)} placeholder='Lure Type'>
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
      <LureSelect lureTypeId={lureTypeId} field={field} />
    </>
  )
}