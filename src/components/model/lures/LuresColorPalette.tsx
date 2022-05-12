import React, { useState } from 'react'
import {
  Circle, Wrap, WrapItem, Input
} from "@chakra-ui/react";
import { ColorList } from "./color_data_list"

type DetailProp = {
  field?: any
}

// ルアーカラー用
export default function LuresColorPalette(props: DetailProp) {

  const { field } = props

  // カラークリック
  const [ color, setColor ] = useState('')

  // カラーパレットの色クリック
  function handleClickColor(value: string) {
    setColor(value)
  }

  return (
    <>
      <Wrap mb='20px' p='10px' bg='gray.50'>
        {
          ColorList.map((item, index) => {
            return (
              <WrapItem key={index} >
                <Circle boxShadow='dark-lg' onClick={() => handleClickColor(item.color)} mr='5px' size='30px' bg={item.code}>
                </Circle>
              </WrapItem>
            )
          })
        }
      </Wrap>
      <Input {...field} width="100%" fontSize="1xl" id='color' value={color} variant='flushed' placeholder='Enter' />
    </>
  )
}