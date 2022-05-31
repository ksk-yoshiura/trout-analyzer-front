import React, { useEffect, useState } from 'react'
import {
  useField
} from 'formik';
import {
  Circle, Wrap, WrapItem, Input, Tooltip, 
} from "@chakra-ui/react";
import Loading from '../../shared/Loading'
import useSWR from 'swr'
import { ColorsApiResponse } from "../../../pages/api/colors/index"

// ルアーカラー用
export default function LuresColorPalette(props: any) {
  const [field, meta, helpers] = useField(props.field);
  // 初期値表示
  const defaultValue = field.value ? field.value : null
  useEffect(() => { // 初期値をフィールドにセット
    helpers.setValue(defaultValue)
  }, [])
  // カラークリック
  const [colorName, setColorName] = useState('')

  // APIからデータ取得
  const { data, error } = useSWR<ColorsApiResponse, Error>('colors')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  // カラーデータ
  const colorList = data.result ? data.result : []
  // カラーパレットの色クリック
  function handleClickColor(value: string) {
    helpers.setValue(value)
    // カラー名（表示用）
    getColorName(value)
  }

  function getColorName(value: string) {
    const selectedColorId = value
    const colorName = colorList.filter((val) => {
      return selectedColorId === val.ID
    })
    setColorName(colorName[0].name)
  }

  return (
    <>
      <Wrap mb='20px' p='10px' bg='gray.30'>
        {
          colorList.map((item, index) => {
            return (
              <WrapItem key={index} >
                <Tooltip label={item.name} aria-label='A tooltip'>
                  <Circle boxShadow='dark-lg' onClick={() => handleClickColor(item.ID)} mr='5px' size='30px' bg={item.code}>
                  </Circle>
                </Tooltip>
              </WrapItem>
            )
          })
        }
      </Wrap>
      <Input float={'left'} width={'auto'} isDisabled={true} variant='flushed' value={colorName} />
    </>
  )
}