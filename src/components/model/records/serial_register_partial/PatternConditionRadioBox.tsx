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
}

const patternData = [
  {'name': 'result', 'default': 'caught'},
  {'name': 'speed', 'default': 'fast'},
  {'name': 'depth', 'default': 'deep'},
  {'name': 'weather', 'default': 'sunny'}
]

export default function PatternConditionRadio(props: PatternTypeProp) {
  // パターンタイプ
  const { typeNum } = props

  // ラジオボタンデータ
  const { getRadioProps } = useRadioGroup({
    name: patternData[typeNum - 1 ].name,
    defaultValue: patternData[typeNum - 1 ].default,
    onChange: console.log // TODO：valueをセットする関数を用意
  })

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
      {resultData?.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <WrapItem key={value}>
            <RadioCard {...radio}>
              {value}
            </RadioCard>
          </WrapItem>
        )
      })}
    </Wrap>
  )
};