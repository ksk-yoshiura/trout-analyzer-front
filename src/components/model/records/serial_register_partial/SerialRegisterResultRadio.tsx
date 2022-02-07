import {
  useRadioGroup,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import RadioCard from '../../../shared/RadioCard';
import { ResultRadiotOptionMock } from '../../mock/serial_register/serial_register_radio_mock'

import useSWR from 'swr'
import { PatternConditionsApiResponse } from "../../../../pages/api/pattern_conditions/type_num/[type_num]"

const fetcher = (url: string) => fetch(url).then((r) => r.json())
const resultTypeNum = 1;

export default function ResultRadio() {

  const { getRadioProps } = useRadioGroup({
    name: 'result',
    defaultValue: 'caught',
    onChange: console.log // TODO：valueをセットする関数を用意
  })

  // APIからデータ取得
  const { data, error } = useSWR<PatternConditionsApiResponse, Error>('/api/pattern_conditions/type_num/' + resultTypeNum, fetcher)
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