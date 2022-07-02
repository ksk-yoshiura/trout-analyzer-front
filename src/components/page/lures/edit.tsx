import {
  Flex
} from '@chakra-ui/react'
import { useRouter } from "next/router";
import React from 'react'
import useSWR from 'swr'

import type { LuresApiResponse } from "../../../pages/api/lures/[id]"
import LureForm from '../../model/lures/LureForm'
import BackToListPageLink from '../../shared/BackToListPageLink'
import Loading from '../../shared/Loading'

export default function LureEdit(): JSX.Element {

  // パラメータからルアーID取得
  const router = useRouter();
  const { id } = router.query

  // APIからデータ取得
  const { data, error } = useSWR<LuresApiResponse, Error>('lures/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  return (
    <>
      <BackToListPageLink name={'lures'} />
      <Flex textAlign="center" w="100wh">
        <LureForm chosenId={id} data={data.result} />
      </Flex>
    </>
  )
}