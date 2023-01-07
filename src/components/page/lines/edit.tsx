import {
  Flex
} from '@chakra-ui/react'
import { useRouter } from "next/router";
import React from 'react'
import useSWR from 'swr'

import type { LineDetailApiResponse } from "../../../pages/api/lines/[id]"
import LineForm from '../../model/lines/LineForm'
import BackToListPageLink from '../../shared/BackToListPageLink'
import Loading from '../../shared/Loading'

export default function LineEdit(): JSX.Element {
  // パラメータからロッドID取得
  const router = useRouter();
  const { id } = router.query

  // APIからデータ取得
  const { data, error } = useSWR<LineDetailApiResponse, Error>('lines/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  return (
    <>
      <BackToListPageLink name={'lines'} />
      <Flex textAlign="center" w="100wh">
        <LineForm chosenId={id} data={data.result} />
      </Flex>
    </>
  )
}