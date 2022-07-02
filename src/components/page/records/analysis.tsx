import { ArrowBackIcon } from '@chakra-ui/icons'
import {
  Icon,
  Link
} from '@chakra-ui/react'
import NextLink from "next/link"
import { useRouter } from "next/router";
import React from 'react'

import RecordPatternsAnalysis from '../../model/records/RecordPatternsAnalysis'

export default function PatternAnalysis() {
  // パラメータからレコードID取得
  const router = useRouter();
  const { record_id } = router.query
  // 戻るリンク
  const backLinkToPatternListPage = "/records/" + record_id + "/patterns/list"
  return (
    <>
      <NextLink href={backLinkToPatternListPage} passHref>
        <Link pb={5} as={'button'} color='teal'>
          <Icon as={ArrowBackIcon} />
          Back to patterns list
        </Link>
      </NextLink>
      <RecordPatternsAnalysis />
    </>
  )
}