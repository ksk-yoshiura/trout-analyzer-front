import React from 'react'
import {
  Select,
} from '@chakra-ui/react'
import Loading from '../../shared/Loading'
import useSWR from 'swr'
import { LureTypesApiResponse } from "../../../pages/api/lure_types/index"

type TypeProp = {
  field?: any
  setTypeId?: React.Dispatch<React.SetStateAction<string>>;
}

export default function LureTypeSelect(props: TypeProp) {
  // LureFormのeditで選択されたタイプ
  const { field, setTypeId } = props
  // APIからデータ取得
  const { data, error } = useSWR<LureTypesApiResponse, Error>('lure_types')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  // ルアータイプセレクト（一覧表示時のみ機能）
  function changeHandler(event: React.FormEvent<HTMLSelectElement>) {
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
        <Select {...field} w={150} placeholder='Lure Type' onChange={(event) => changeHandler(event)}>
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