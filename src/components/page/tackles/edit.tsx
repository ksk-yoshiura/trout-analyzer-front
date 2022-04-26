import React from 'react'
import {
  Flex
} from '@chakra-ui/react'
import TackleForm from '../../model/tackles/TackleForm'
import { useRouter } from "next/router";
import BackToListPageLink from '../../shared/BackToListPageLink'
import Loading from '../../shared/Loading'
import useSWR from 'swr'
import { TacklesApiResponse } from "../../../pages/api/tackles/[id]"

export default function TackleEdit(): JSX.Element {
  // パラメータからタックルID取得
  const router = useRouter();
  const { id } = router.query
  // APIからデータ取得
  const { data, error } = useSWR<TacklesApiResponse, Error>('tackles/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  return (
    <>
      <BackToListPageLink name={'tackles'} />
      <Flex textAlign="center" w="100wh">
        <TackleForm chosenId={id} tackleData={data?.result} />
      </Flex>
    </>
  )
}