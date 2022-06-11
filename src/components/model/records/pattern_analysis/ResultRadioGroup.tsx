import React, { useState } from 'react'
import { Radio, RadioGroup,  Stack } from '@chakra-ui/react'

export default function ResultRadioGroup() {
  const [value, setValue] = useState('1')
  return (
    <RadioGroup pb={5} onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='0'>All</Radio>
        <Radio value='1'>Caught</Radio>
        <Radio value='2'>Bid</Radio>
        <Radio value='3'>Chased</Radio>
      </Stack>
    </RadioGroup>
  )
}