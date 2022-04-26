import React from 'react'
import {
  Flex
} from '@chakra-ui/react'
import LineForm from '../../model/lines/LineForm'
import BackToListPageLink from '../../shared/BackToListPageLink'
import { useRouter } from "next/router";
import useSWR from 'swr'
import Loading from '../../shared/Loading'
import { LinesApiResponse } from "../../../pages/api/lines/[id]"

export default function LineEdit(): JSX.Element {
  // パラメータからロッドID取得
  const router = useRouter();
  const { id } = router.query

  // APIからデータ取得
  const { data, error } = useSWR<LinesApiResponse, Error>('lines/' + id)
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