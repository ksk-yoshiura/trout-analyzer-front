import React from 'react'
import {
  Flex
} from '@chakra-ui/react'
import RodForm from '../../model/rods/RodForm'
import BackToListPageLink from '../../shared/BackToListPageLink'
import { useRouter } from "next/router";
import useSWR from 'swr'
import Loading from '../../shared/Loading'
import { RodsApiResponse } from "../../../pages/api/rods/[id]"

export default function RodEdit(): JSX.Element {
  // パラメータからロッドID取得
  const router = useRouter();
  const { id } = router.query

  // APIからデータ取得
  const { data, error } = useSWR<RodsApiResponse, Error>('rods/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  return (
    <>
      <BackToListPageLink name={'rods'} />
      <Flex textAlign="center" w="100wh">
        <RodForm chosenId={id} data={data.result} />
      </Flex>
    </>
  )
}