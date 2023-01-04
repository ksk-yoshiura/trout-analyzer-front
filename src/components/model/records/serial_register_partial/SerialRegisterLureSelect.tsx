import {
  Image,
  Select
} from "@chakra-ui/react";
import {
  useField
} from 'formik';
import React, { useEffect } from 'react';
import useSWR from 'swr'

import type { LuresListByTypeApiResponse } from "../../../../pages/api/lures/type_num/[type_num]"
import Loading from '../../../shared/Loading'

type LureTypeProps = {
  lureTypeId: string
  lureImageURL: string
  setLureImageURL: React.Dispatch<React.SetStateAction<string>>
  field?: any // TODO : any回避
}

export default function LureSelect(props: LureTypeProps) {
  const [field, , helpers] = useField(props.field);
  // 初期値表示
  const defaultValue = field.value ? field.value : 0
  useEffect(() => { // 初期値をフィールドにセット
    helpers.setValue(defaultValue)
  }, [])
  const { lureTypeId, lureImageURL, setLureImageURL } = props
  // ルアーデータリスト
  const { data } = useSWR<LuresListByTypeApiResponse, Error>('lures?type_id=' + lureTypeId)
  if (!data) return <Loading />
  // ルアーデータ
  const lureList = data?.result ? data.result : []
  // S3パス
  const s3DomainPath = process.env.NEXT_PUBLIC_S3_DOMAIN
  // 画像拡張子
  const image_ext = '.png'

  const handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const { target } = event;
    if (!(target instanceof HTMLSelectElement)) {
      return; // or throw new TypeError();
    }
    const targetLureId = target.value

    helpers.setValue(targetLureId)
    lureList.map((val) => {
      if (val.LureBasic.ID == targetLureId && val.LureImage.image_file) {
        setLureImageURL(val.LureImage.image_file)
      }
    })
  }

  return (
    <>
      {
        lureTypeId !== '0' && lureTypeId ?
          <Select {...field} w='100wh' mb='5' placeholder='Select Lure' onChange={(event) => { return handleSelectChange(event) }} >
            {
              lureList.map((item, index) => {
                return (
                  <option key={index} value={item.LureBasic.ID}>
                    {item.name} {item.Color.name} {item.weight} g
                  </option>
                )
              })
            }
          </Select>
          : <></>
      }
      {
        lureImageURL && lureTypeId ?
          <Image src={s3DomainPath + lureImageURL + image_ext} alt={'Lure Image'} />
          : <></>
      }
    </>
  )
}