import React from 'react'
import {
  Flex,
  Link,
  Icon
} from '@chakra-ui/react'
import { useRouter } from "next/router";
import { ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import RecordPatternDetailForm from '../../model/records/RecordPatternDetailForm'
import useSWR from 'swr'
import { PatternApiResponse } from "../../../pages/api/patterns/[id]"
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