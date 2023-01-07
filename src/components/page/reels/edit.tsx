import {
  Flex
} from '@chakra-ui/react'
import { useRouter } from "next/router";
import React from 'react'
import useSWR from 'swr'

import type { ReelDetailApiResponse } from "../../../pages/api/reels/[id]"
import ReelForm from '../../model/reels/ReelForm'
import BackToListPageLink from '../../shared/BackToListPageLink'
import Loading from '../../shared/Loading'

export default function ReelEdit(): JSX.Element {
  // パラメータからロッドID取得
  const router = useRouter();
  const { id } = router.query

  // APIからデータ取得
  const { data, error } = useSWR<ReelDetailApiResponse, Error>('reels/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  return (
    <>
      <BackToListPageLink name={'reels'} />
      <Flex textAlign="center" w="100wh">
        <ReelForm chosenId={id} data={data.result} />
      </Flex>
    </>
  )
}