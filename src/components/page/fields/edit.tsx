import {
  Flex
} from '@chakra-ui/react'
import { useRouter } from "next/router";
import React from 'react'
import useSWR from 'swr'

import type { FieldDetailApiResponse } from "../../../pages/api/fields/[id]"
import FieldForm from '../../model/fields/FieldForm'
import BackToListPageLink from '../../shared/BackToListPageLink'
import Loading from '../../shared/Loading'

export default function FieldEdit(): JSX.Element {
  // パラメータからロッドID取得
  const router = useRouter();
  const { id } = router.query

  // APIからデータ取得
  const { data, error } = useSWR<FieldDetailApiResponse, Error>('fields/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  return (
    <>
      <BackToListPageLink name={'fields'} />
      <Flex textAlign="center" w="100wh">
        <FieldForm chosenId={id} data={data.result} />
      </Flex>
    </>
  )
}