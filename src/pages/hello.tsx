import {
  useToast
} from "@chakra-ui/react";

import { CreateAxiosDefaultInstance } from "../pages/api/utils"


export default function Hello() {
  // APIからデータ取得
  const axiosInstance = CreateAxiosDefaultInstance()

  // アラート
  const toast = useToast()
  axiosInstance.get('hello')
    .then((res) => {
      console.log(res)
      // アラート代わりにトーストを使用
      toast({
        title: 'Lure updated!',
        description: "We've updated your lure data for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    })
    .catch((error) => {
      toast({
        title: 'Failed!',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    })

  return (
    <>
      <h1>hello!!!</h1>
    </>
  )

}