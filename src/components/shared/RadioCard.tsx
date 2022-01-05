import React from "react"
import { 
  Box,
  useRadio,
  Input
} from '@chakra-ui/react'

export default function RadioCard(props:any) { // TODO：一旦anyで退避

  const { getInputProps, getCheckboxProps }  = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()
  console.log(props)

  return (
    <Box as='label'>
      <Input {...input} type='checkbox' />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}