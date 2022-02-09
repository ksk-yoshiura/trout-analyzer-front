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

const depthTypeNum = 3;

export default function DepthRadio() {

  const { getRadioProps } = useRadioGroup({
    name: 'depth',
    defaultValue: 'top',
    onChange: console.log // TODO：valueをセットする関数を用意
  })

  // APIからデータ取得
  const { data, error } = useSWR<PatternConditionsApiResponse, Error>('/api/pattern_conditions/type_num/' + depthTypeNum, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  // 深度の名称配列作成
  const depthData = data.pattern_condition?.map(function (value) {
    return value.type_name
  })

  return (
    <Wrap>
      {depthData?.map((value) => {
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