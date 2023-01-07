import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure
} from '@chakra-ui/react'
import React, { useState } from 'react'
import useSWR from 'swr'

import type { TacklesListApiResponse } from "../../../pages/api/tackles/index"
import DetailModal from '../../shared/DetailModal'
import ErrorMessage from '../../shared/ErrorMessage'
import Loading from '../../shared/Loading'
import NoDataAlert from '../../shared/NoDataAlert'
import TackleDetail from './TackleDetail'

export default function TacklesList(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  // APIからデータ取得
  const { data, error } = useSWR<TacklesListApiResponse, Error>('tackles')
  if (!data) return <Loading />
  if (error) return <ErrorMessage />
  // タックルデータ
  const tacklesListData = data.result ? data.result : []

  const clickHandler = (value: string) => {
    // 型変換
    const tackleIdNumber = Number(value)
    // クリックされたカードから得たIDを更新
    idState(tackleIdNumber)
  }

  // モーダルを部分的に移行し共通化
  const TackleDetailModal = () => {
    return (
      <DetailModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'tackle'} >
        <TackleDetail chosenId={chosenId} />
      </DetailModal>
    )
  }

  return (
    <>
      <TableContainer>
        {
          tacklesListData.length > 0 ?
            <Table>
              <Thead>
                <Tr>
                  <Th>ROD</Th>
                  <Th>REEL</Th>
                  <Th>LINE</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  tacklesListData.map((item, index) => {
                    return (
                      <Tr key={index} onClick={() => { onOpen(), clickHandler(item.ID) }}>
                        <Td>{item.Rod.name}</Td>
                        <Td>{item.Reel.name}</Td>
                        <Td>{item.Line.name}</Td>
                      </Tr>
                    )
                  })
                }
              </Tbody>
            </Table>
            : <NoDataAlert title={'tackles'} />
        }
      </TableContainer>
      <TackleDetailModal />
    </>
  )
}