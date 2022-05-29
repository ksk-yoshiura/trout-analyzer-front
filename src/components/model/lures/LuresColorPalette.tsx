import React, { useState } from 'react'
import {
  Circle, Wrap, WrapItem, Input, Tooltip
} from "@chakra-ui/react";
import Loading from '../../shared/Loading'
import useSWR from 'swr'
import { ColorsApiResponse } from "../../../pages/api/colors/index"

type DetailProp = {
  field?: any
}

// ルアーカラー用
export default function LuresColorPalette(props: DetailProp) {

  const { field } = props
  // カラークリック
  const [color, setColor] = useState('')

  // APIからデータ取得
  const { data, error } = useSWR<ColorsApiResponse, Error>('colors')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  // カラーデータ
  const colorList = data.result ? data.result : []
  // カラーパレットの色クリック
  function handleClickColor(value: string) {
    setColor(value)
  }

  return (
    <>
      <Wrap mb='20px' p='10px' bg='gray.30'>
        {
          colorList.map((item, index) => {
            return (
              <WrapItem key={index} >
                <Tooltip label={item.name} aria-label='A tooltip'>
                  <Circle boxShadow='dark-lg' onClick={() => handleClickColor(item.name)} mr='5px' size='30px' bg={item.code}>
                  </Circle>
                </Tooltip>
              </WrapItem>
            )
          })
        }
      </Wrap>
      <Input {...field} dsiabled={'true'} width="100%" fontSize="1xl" id='color' value={color} variant='flushed' placeholder='Select' />
    </>
  )
}