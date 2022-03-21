import React, { useState } from 'react'
import {
  Select
} from "@chakra-ui/react";
import LureSelect from './SerialRegisterLureSelect'
import Loading from '../../../shared/Loading'
import useSWR from 'swr'
import { LureTypesApiResponse } from "../../../../pages/api/lure_types/index"

export default function LureTypeSelect(props: any) {
  const { field } = props
  const [lureTypeId, setLureTypeId] = useState('0')

  // APIからデータ取得
  // ルアータイプリストデータ
  const { data, error } = useSWR<LureTypesApiResponse, Error>('lure_types')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  
  function changeHandler(event: React.FormEvent<HTMLSelectElement>) {
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
          data.result?.map((item, index) => {
            return (
              <option key={index} value={item.ID}>
                {item.typeName}
              </option>
            )
          })
        }
      </Select>
      {
        lureTypeId !== '0'
        ?<LureSelect lureTypeId={lureTypeId} field={field} />
        : <></>
      }
    </>
  )
}