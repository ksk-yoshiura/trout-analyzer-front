import {
  Flex,
  Button
} from '@chakra-ui/react'
import NextLink from "next/link"
import { useRouter } from "next/router";
import RecordPatternsList from '../../model/records/RecordPatternsList'

export default function RecordsList(): JSX.Element {
  // パラメータからレコードID取得
  const router = useRouter();
  const { record_id } = router.query
  return (
    <>
      <Flex pb={5} w="100%">
        <NextLink href={"/records/" + record_id + "/patterns/create"} passHref>
          <Button  pl={10} pr={10} colorScheme='teal'>Add Pattern</Button>
        </NextLink>
      </Flex>
      <RecordPatternsList />
    </>
  );
}