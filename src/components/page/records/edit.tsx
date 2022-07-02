import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Flex,
  Icon,
  Link
} from '@chakra-ui/react'
import NextLink from "next/link"
import { useRouter } from "next/router";
import React from 'react'
import useSWR from 'swr'

import type { PatternApiResponse } from "../../../pages/api/patterns/[id]"
import RecordPatternDetailForm from '../../model/records/RecordPatternDetailForm'
import Loading from '../../shared/Loading'

export default function RecordEdit(): JSX.Element {
  // パラメータからパターンID取得
  const router = useRouter();
  const { id, record_id } = router.query

  // 戻るリンク
  const backLinkToPatternListPage = "/records/" + record_id + "/patterns/list"

  // APIからデータ取得
  const { data, error } = useSWR<PatternApiResponse, Error>('patterns/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  return (
    <>
      <NextLink href={backLinkToPatternListPage} passHref>
        <Link pb={5} as={'button'} color='teal'>
          <Icon as={ArrowBackIcon} />
          Back to records list
        </Link>
      </NextLink>
      <Flex textAlign="center" w="100wh">
        <RecordPatternDetailForm patternData={data.result} backLinkToPatternListPage={backLinkToPatternListPage} />
      </Flex>
    </>
  )
}