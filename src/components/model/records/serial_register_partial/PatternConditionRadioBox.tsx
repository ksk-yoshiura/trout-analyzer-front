import React from 'react';
import {
  useRadioGroup,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import RadioCard from '../../../shared/RadioCard';
import Loading from '../../../shared/Loading'
import useSWR from 'swr'
import { PatternConditionsApiResponse } from "../../../../pages/api/pattern_conditions/type_num/[type_num]"

type PatternTypeProp = {
  typeNum: number
  field?: any
}

const patternData = [ // 初期データ
  { 'default': 'caught' },
  { 'default': 'super fast' },
  { 'default': 'top' },
  { 'default': 'sunny' }
]

export default function PatternConditionRadio(props: PatternTypeProp) {
  // パターンタイプ
  const { typeNum, field } = props

  // 初期データセット
  const fieldDefaultValue = patternData[typeNum - 1 ].default

  // ラジオボタンデータ
  const { getRadioProps } = useRadioGroup({
    name: field?.name,
    defaultValue: fieldDefaultValue
  })

  // APIからデータ取得
  const { data, error } = useSWR<PatternConditionsApiResponse, Error>('pattern_conditions/type_num/' + typeNum)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  // 釣果の名称配列作成
  const resultData = data.result?.map(function (value) {
    return value.type_name
  })

  return (
    <Wrap {...field}>
      { resultData?.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <WrapItem key={value}>
            <RadioCard {...radio} >
              {value}
            </RadioCard>
          </WrapItem>
        )
      })}
    </Wrap>
  )
};