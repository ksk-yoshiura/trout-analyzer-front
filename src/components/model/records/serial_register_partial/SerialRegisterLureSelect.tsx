import { useState, useEffect } from 'react'
import {
  Select
} from "@chakra-ui/react";
import { LureTypeSelectMock } from '../../mock/lures/lure_type_select_mock'
import { LureNameListMock } from '../../mock/lures/lure_name_list_mock'

import useSWR from 'swr'
import { LureTypesApiResponse } from "../../../../pages/api/lure_types/index"
import { LuresApiResponse } from "../../../../pages/api/lures/[type_num]"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function LureSelect(field: any) {
  const [lureTypeId, setLureTypeId] = useState('0')

  function changeHandler(event: any) { // TODO：anyで一旦退避
    const { target } = event;
    if (!(target instanceof HTMLSelectElement)) {
      return; // or throw new TypeError();
    }
    const targetLureTypeId = target.value
    setLureTypeId(targetLureTypeId)
  }

  // APIからデータ取得
  // ルアータイプリスト
  const { data, error } = useSWR<LureTypesApiResponse, Error>('/api/lure_types/', fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

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
      {
        lureTypeId !== '0' && lureTypeId ?
          <Select w='100wh' {...field} onChange={(event) => changeHandler(event)} placeholder='Name'>
            {
              LureNameListMock.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name} :{item.color}
                  </option>
                )
              })
            }
          </Select> : <></>
      }
    </>
  )
}