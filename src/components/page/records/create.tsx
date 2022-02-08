import {
  Flex,
  Link,
  Icon
} from '@chakra-ui/react'
import { useRouter } from "next/router";
import { ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import RecordPatternDetailForm from '../../model/records/RecordPatternDetailForm'

export default function RecordCreate(): JSX.Element {
  // パラメータからレコードID取得
  const router = useRouter();
  const { record_id } = router.query
  return (
    <>
      <NextLink href={"/records/" + record_id + "/patterns/list"} passHref>
        <Link pb={5} as={'button'} color='teal'>
          <Icon as={ArrowBackIcon} />
          Back to records list
        </Link>
      </NextLink>
      <Flex textAlign="center" w="100wh">
        <RecordPatternDetailForm />
      </Flex>
    </>
  )
}