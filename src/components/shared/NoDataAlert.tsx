import React from 'react'
import {
  Alert,
  AlertIcon
} from '@chakra-ui/react'

type DetailProp = {
  title: string
}

export default function NoDataAlert(props: DetailProp) {
  // ページのタイトル
  const { title } = props
  // メッセージ
  const message = "Register new " + title + "!"
  return (
    <Alert status='error' w="300px">
      <AlertIcon />
      { message }
    </Alert>
  )
}