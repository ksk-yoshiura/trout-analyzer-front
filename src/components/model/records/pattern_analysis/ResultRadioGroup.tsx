import React from 'react'
import { Radio, RadioGroup,  Stack } from '@chakra-ui/react'

type DetailProps = {
  setTargetResult: any
}

export default function ResultRadioGroup(props: DetailProps) {
  const { setTargetResult } = props
  function handleSelectRadio(value: string) {
    setTargetResult(value)
  }
  return (
    <RadioGroup pb={5} onChange={(val) => handleSelectRadio(val)}>
      <Stack direction='row'>
        <Radio value='all'>All</Radio>
        <Radio value='caught'>Caught</Radio>
        <Radio value='bit'>Bit</Radio>
        <Radio value='chased'>Chased</Radio>
      </Stack>
    </RadioGroup>
  )
}