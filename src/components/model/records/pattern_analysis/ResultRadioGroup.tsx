import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'

type DetailProps = {
  setTargetResult: any
  targetResult: string
}

export default function ResultRadioGroup(props: DetailProps) {
  const { targetResult, setTargetResult } = props
  const handleSelectRadio = (value: string) => {
    setTargetResult(value)
  }
  return (
    <RadioGroup pb={5} val={targetResult} onChange={(val) => { return handleSelectRadio(val) }}>
      <Stack direction='row'>
        <Radio value='all'>All</Radio>
        <Radio value='caught'>Caught</Radio>
        <Radio value='bit'>Bit</Radio>
        <Radio value='chased'>Chased</Radio>
      </Stack>
    </RadioGroup>
  )
}