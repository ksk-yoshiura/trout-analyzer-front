import {
  Flex,
  Link,
  Icon
} from '@chakra-ui/react'
import { useRouter } from "next/router";
import { ArrowBackIcon } from '@chakra-ui/icons'
import NextLink from "next/link"
import RecordPatternDetailForm from '../../model/records/RecordPatternDetailForm'


export default function RecordEdit(): JSX.Element {
  // パラメータからパターンID取得
  const router = useRouter();
  const { id } = router.query
  return (
    <>
      <NextLink href={"/records/list/" + id} passHref>
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