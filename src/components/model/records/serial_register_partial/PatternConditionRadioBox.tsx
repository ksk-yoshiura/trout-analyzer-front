import {
  useRadioGroup,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import React from 'react';
import useSWR from 'swr'

import type { PatternConditionsApiResponse } from "../../../../pages/api/pattern_conditions/type_num/[type_num]"
import Loading from '../../../shared/Loading'
import RadioCard from '../../../shared/RadioCard';

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

// 各タイプのURL
const typeURL = [
  'default',
  'result',
  'lure_speed',
  'lure_depth',
  'weather'
]

export default function PatternConditionRadio(props: PatternTypeProp) {
  // パターンタイプ
  const { typeNum, field } = props

  // 初期データセット
  const fieldDefaultValue = patternData[typeNum - 1].default

  // ラジオボタンデータ
  const { getRadioProps } = useRadioGroup({
    name: field?.name,
    defaultValue: fieldDefaultValue
  })

  // APIからデータ取得
  const { data } = useSWR<PatternConditionsApiResponse, Error>('pattern_conditions/' + typeURL[typeNum])
  if (!data) return <Loading />

  // 釣果の名称配列作成
  const resultData = data.result?.map((value) => {
    return value.typeName
  })

  return (
    <Wrap {...field}>
      {resultData?.map((value) => {
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