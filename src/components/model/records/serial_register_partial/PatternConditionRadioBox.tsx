import React from 'react';
import {
  useRadioGroup,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import RadioCard from '../../../shared/RadioCard';
import useSWR from 'swr'
import { PatternConditionsApiResponse } from "../../../../pages/api/pattern_conditions/type_num/[type_num]"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

type PatternTypeProp = {
  typeNum: number
  field?: any
}

const patternData = [ // 初期データ
  { 'default': 'caught' },
  { 'default': 'fast' },
  { 'default': 'deep' },
  { 'default': 'sunny' }
]

export default function PatternConditionRadio(props: PatternTypeProp) {
  // パターンタイプ
  const { typeNum, field } = props

  // 初期データセット
  const fieldDefaultValue = patternData[typeNum - 1 ].default

  // ラジオボタンデータ
  const { getRadioProps } = useRadioGroup({
    name: field.name,
    defaultValue: fieldDefaultValue,
    onChange: setData // TODO：valueをセットする関数を用意
  })

  function setData(val: any) { // 値をセットする
    field.value = val
    console.log(field)
  }

  // APIからデータ取得
  const { data, error } = useSWR<PatternConditionsApiResponse, Error>('/api/pattern_conditions/type_num/' + typeNum, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  // 釣果の名称配列作成
  const resultData = data.pattern_condition?.map(function (value) {
    return value.type_name
  })

  return (
    <Wrap>
      { resultData?.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <WrapItem key={value}>
            <RadioCard {...radio} field={field}>
              {value}
            </RadioCard>
          </WrapItem>
        )
      })}
    </Wrap>
  )
};