import {
  Flex
} from '@chakra-ui/react'
import ReelForm from '../../model/reels/ReelForm'
import BackToListPageLink from '../../shared/BackToListPageLink'
import { useRouter } from "next/router";
import useSWR from 'swr'
import Loading from '../../shared/Loading'
import { ReelsApiResponse } from "../../../pages/api/reels/[id]"

export default function ReelEdit(): JSX.Element {
  // パラメータからロッドID取得
  const router = useRouter();
  const { id } = router.query

  // APIからデータ取得
  const { data, error } = useSWR<ReelsApiResponse, Error>('reels/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  return (
    <>
      <BackToListPageLink name={'reels'} />
      <Flex textAlign="center" w="100wh">
        <ReelForm chosenId={id} data={data.result} />
      </Flex>
    </>
  )
}