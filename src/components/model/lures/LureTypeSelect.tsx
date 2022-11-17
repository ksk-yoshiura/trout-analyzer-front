import {
  Select,
} from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

import type { LureTypesApiResponse } from "../../../pages/api/lure_types/index"
import Loading from '../../shared/Loading'

const fetcher = (url: string) => {
  const response = axios(url)
    .then((res) => {
      return res.data
    })
  return response
};

type TypeProp = {
  field?: any
  setTypeId?: React.Dispatch<React.SetStateAction<string>>;
}

export default function LureTypeSelect(props: TypeProp) {
  // LureFormのeditで選択されたタイプ
  const { field, setTypeId } = props
  // APIからデータ取得
  const options = {
    revalidateOnFocus: true,
    refreshInterval: 100,
  };
  const { data, error, mutate } = useSWR<LureTypesApiResponse, Error>('lure_types', fetcher, options)
  if (!data) { mutate(); return <Loading /> }
  if (error) return <div>An error has occurred.</div>

  // ルアータイプセレクト（一覧表示時のみ機能）
  const changeHandler = (event: React.FormEvent<HTMLSelectElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLSelectElement)) {
      return; // or throw new TypeError();
    }
    const targetLureTypeId = target.value
    setTypeId?.(targetLureTypeId)
  }

  return (
    setTypeId ?
      <>
        <Select {...field} w={150} placeholder='Lure Type' onChange={(event) => { return changeHandler(event) }}>
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
      </>
      :
      <>
        <Select {...field} w={150} placeholder='Lure Type' >
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
      </>
  )
};