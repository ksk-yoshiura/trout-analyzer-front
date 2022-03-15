import {
  Flex
} from '@chakra-ui/react'
import FieldForm from '../../model/fields/FieldForm'
import BackToListPageLink from '../../shared/BackToListPageLink'
import { useRouter } from "next/router";
import useSWR from 'swr'
import Loading from '../../shared/Loading'
import { FieldsApiResponse } from "../../../pages/api/fields/[id]"

export default function FieldEdit(): JSX.Element {
  // パラメータからロッドID取得
  const router = useRouter();
  const { id } = router.query

  // APIからデータ取得
  const { data, error } = useSWR<FieldsApiResponse, Error>('fields/' + id)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  return (
    <>
      <BackToListPageLink name={'fields'} />
      <Flex textAlign="center" w="100wh">
        {
          id ?? 
          <FieldForm chosenId={id} data={data.result} />
        }
      </Flex>
    </>
  )
}