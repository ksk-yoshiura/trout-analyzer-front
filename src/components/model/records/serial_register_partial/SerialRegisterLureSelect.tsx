import {
  Select
} from "@chakra-ui/react";
import useSWR from 'swr'
import { LuresApiResponse } from "../../../../pages/api/lures/type_num/[type_num]"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

import { LureNameListMock } from '../../mock/lures/lure_name_list_mock'
type LureTypeProps = {
  lureTypeId: string
  field: any // TODO : any回避
}

export default function LureSelect(props: LureTypeProps) {
  const { lureTypeId, field } = props

  // ルアーデータリスト
  const { data, error } = useSWR<LuresApiResponse, Error>('/api/lures/type_num/' + lureTypeId, fetcher)
  if (error) return <p>Error: {error.message}</p>
  return (
    lureTypeId !== '0' && lureTypeId ?
          <Select w='100wh' {...field} placeholder='Select lure'>
            {
              data?.lures?.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name} :{item.color}
                  </option>
                )
              })
            }
          </Select> : <></>
  )
}