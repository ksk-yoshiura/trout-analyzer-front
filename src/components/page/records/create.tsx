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

type recordFormData = {
  result?: number;
  speed?: number;
  depth?: number;
  weather?: number;
  lureId: number;
  tackleId: number;
  recordId: number;
}

export default function RecordCreate(): JSX.Element {
  // パラメータからレコードID取得
  const router = useRouter();
  const { record_id } = router.query
  // 戻るリンク
  const backLinkToPatternListPage = "/records/" + record_id + "/patterns/list"
  // APIからデータ取得
  const { data, error } = useSWR<PatternConditionsApiResponse, Error>('pattern_conditions')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  const vacantData: recordFormData = {
    result: 0,
    speed: 0,
    depth: 0,
    weather: 0,
    lureId: 0,
    tackleId: 0,
    recordId: 0,
  }

  return (
    <>
      <NextLink href={"/records/" + record_id + "/patterns/list"} passHref>
        <Link pb={5} as={'button'} color='teal'>
          <Icon as={ArrowBackIcon} />
          Back to records list
        </Link>
      </NextLink>
      <Flex textAlign="center" w="100wh">
        <RecordPatternDetailForm patternData={vacantData} backLinkToPatternListPage={backLinkToPatternListPage} />
      </Flex>
    </>
  )
}