import {
  Select
} from "@chakra-ui/react";
import React, { useState } from 'react'
import useSWR from 'swr'

import type { LureTypesApiResponse } from "../../../../pages/api/lure_types/index"
import Loading from '../../../shared/Loading'
import LureSelect from './SerialRegisterLureSelect'

export default function LureTypeSelect(props: any) {
  const { field } = props
  const [lureTypeId, setLureTypeId] = useState('0')
  // 画像
  const [lureImageURL, setLureImageURL] = useState('')

  // APIからデータ取得
  // ルアータイプリストデータ
  const { data, error } = useSWR<LureTypesApiResponse, Error>('lure_types')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  const changeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLSelectElement)) {
      return; // or throw new TypeError();
    }
    const targetLureTypeId = target.value
    setLureTypeId(targetLureTypeId)
    // 画像URLを一旦無効化
    setLureImageURL('')
  }

  return (
    <>
      <Select mb={2} w={130} onChange={event => { return changeHandler(event) }} placeholder='Lure Type'>
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
          ? <LureSelect lureImageURL={lureImageURL} setLureImageURL={setLureImageURL} lureTypeId={lureTypeId} field={field} />
          : <></>
      }
    </>
  )
}