import React, { useEffect } from 'react'
import {
  useField
} from 'formik';
import { Radio, RadioGroup,  Stack } from '@chakra-ui/react'

type DetailProps = {
  field: any
}

export default function ResultRadioGroup(props: DetailProps) {
  const [field, meta, helpers] = useField(props.field);
  // 初期値表示
  const defaultValue = field.value ? field.value : '0'
  useEffect(() => { // 初期値をフィールドにセット
    helpers.setValue(defaultValue)
  }, [])

  function handleSelectRadio(value: string) {
    helpers.setValue(value)

  }
  return (
    <RadioGroup {...field} pb={5} onChange={(val) => handleSelectRadio(val)}>
      <Stack direction='row'>
        <Radio value='0'>All</Radio>
        <Radio value='1'>Caught</Radio>
        <Radio value='2'>Bid</Radio>
        <Radio value='3'>Chased</Radio>
      </Stack>
    </RadioGroup>
  )
}