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
import { PatternConditionsApiResponse } from "../../../pages/api/pattern_conditions/index"
import Loading from '../../shared/Loading'

export default function RecordEdit(): JSX.Element {
  // パラメータからパターンID取得
  const router = useRouter();
  const { record_id } = router.query
  // 戻るリンク
  const backLinkToPatternListPage = "/records/" + record_id + "/patterns/list"
  // APIからデータ取得
  const { data, error } = useSWR<PatternConditionsApiResponse, Error>('pattern_conditions')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  // パターンリスト
  const patternDataSet = data.result?.map(function (value: any) { // TODO：any退避
    const dataSet = {ID: undefined , typeName: ''}
    dataSet.ID = value.ID
    dataSet.typeName = value.typeName
    return dataSet
  })

  return (
    <>
      <NextLink href={backLinkToPatternListPage} passHref>
        <Link pb={5} as={'button'} color='teal'>
          <Icon as={ArrowBackIcon} />
          Back to records list
        </Link>
      </NextLink>
      <Flex textAlign="center" w="100wh">
        <RecordPatternDetailForm patternDataSet={patternDataSet} backLinkToPatternListPage={backLinkToPatternListPage} />
      </Flex>
    </>
  )
}