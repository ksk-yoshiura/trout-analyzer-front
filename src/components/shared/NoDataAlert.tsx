import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
import React from 'react'

type DetailProp = {
  title: string
}

export default function NoDataAlert(props: DetailProp) {
  // ページのタイトル
  const { title } = props
  // レコードページか
  const isRecordsAll = title === "records" ? true : false
  // メッセージ
  const message = isRecordsAll
    ? "Enjoy fishing and Create records!!"
    : "Register new " + title + "!"
  // メッセージタイプ
  const messageType = title !== "records" ? "error" : "success"

  // 通常コンポーネント
  const NormalAlertComponent = () => {
    return (
      <Alert status={messageType} w="300px">
        <AlertIcon />
        {message}
      </Alert>
    )
  }

  // レコードコンポーネント
  const RecordsAlertComponent = () => {
    return (
      <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
      >
        <AlertIcon boxSize='40px' mr={0} />
        <AlertTitle mt={4} mb={1} fontSize='lg'>
          Enjoy fishing and create records!
        </AlertTitle>
        <AlertDescription maxWidth='sm'>
          Thank you for starting using my application.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    isRecordsAll ? <RecordsAlertComponent /> : <NormalAlertComponent />
  )
}