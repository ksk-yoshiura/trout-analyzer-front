import React from 'react'
import {
  Flex,
  Link,
  Button, Icon
} from '@chakra-ui/react'
import NextLink from "next/link"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router";
import RecordPatternsList from '../../model/records/RecordPatternsList'

export default function RecordsList(): JSX.Element {
  // パラメータからレコードID取得
  const router = useRouter();
  const { record_id } = router.query
  // 戻るリンク
  const backLinkToRecordsAllPage = "/records/all"

  return (
    <>
      <NextLink href={backLinkToRecordsAllPage} passHref>
        <Link pb={5} as={'button'} color='teal'>
          <Icon as={ArrowBackIcon} />
          Back to records all
        </Link>
      </NextLink>
      <Flex pb={5} w="100%">
        <NextLink href={"/records/" + record_id + "/patterns/create"} passHref>
          <Button pl={10} pr={10} colorScheme='teal'>Add Pattern</Button>
        </NextLink>
        <NextLink href={"/records/" + record_id + "/patterns/analysis"} passHref>
          <Button pl={10} ml={10} pr={10} colorScheme='teal'>Analyze Patterns</Button>
        </NextLink>
      </Flex>
      <RecordPatternsList />
    </>
  );
}