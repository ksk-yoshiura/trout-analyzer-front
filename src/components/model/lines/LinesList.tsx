import {
  Badge,
  Box,
  Button,
  Image,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import React, { useState } from 'react'
import useSWR from 'swr'

import { image_ext, s3DomainPath } from "../../../const/image"
import type { LinesListApiResponse } from "../../../pages/api/lines/index"
import getDateFormatted from "../../../utils/dateFormat"
import DetailModal from '../../shared/DetailModal'
import DetailTackleModal from '../../shared/DetailTackleModal'
import Loading from '../../shared/Loading'
import NoDataAlert from '../../shared/NoDataAlert'
import LineDetail from './LineDetail'

type ListProps = {
  isTackle: boolean
  setNewLineId?: React.Dispatch<React.SetStateAction<number>>;
}

export default function LinesList(props: ListProps): JSX.Element {
  // タックルフォームでの呼び出しの場合
  const { isTackle, setNewLineId } = props
  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  // APIからデータ取得
  const { data, error } = useSWR<LinesListApiResponse, Error>('lines')
  if (!data) return <Loading />
  if (error) return <div>An error has occurred.</div>
  // ラインデータ
  const linesListData = data.result ? data.result : []

  const clickHandler = (value: string) => {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  // タックル用ライン選択
  const selectLineForTackleHandler = (event: any) => {
    const { target } = event
    const selectId = target.value
    setNewLineId ? setNewLineId(selectId) : null
  }

  // モーダルを部分的に移行し共通化
  // 完全移行はonOpen()が動作しなくなるので断念
  const LineDetailModal = () => {
    return (
      <DetailModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'line'} >
        <LineDetail chosenId={chosenId} />
      </DetailModal>
    )
  }

  // タックル用モーダル
  const LineDetailForTackleModal = () => {
    return (
      <DetailTackleModal isOpen={isOpen} onClose={onClose} title={'line'} >
        <ModalBody>
          <LineDetail chosenId={chosenId} />
        </ModalBody>

        <ModalFooter display={'flex'} justifyContent={'space-between'}>
          <Button variant='solid' onClick={() => { return onClose() }}>Cancel</Button>
          <Button
            colorScheme='blue'
            value={chosenId}
            variant='solid'
            onClick={
              (event) => {
                selectLineForTackleHandler(event);
                onClose()
              }
            }>Select</Button>
        </ModalFooter>
      </DetailTackleModal>
    )
  }

  return (
    <Wrap spacing={5}>
      {
        linesListData.length > 0 ? linesListData.map((item, index) => {
          return (
            <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.ID) }} type='button' as={"button"}>
              <Box w={160} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={item.LineImage.image_file && s3DomainPath ? s3DomainPath + item.LineImage.image_file + image_ext : '/no_image.png'} alt={item.name ?? 'No Image'} />

                <Box p='2'>
                  <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' color='gray.500'>
                      {item.LineCondition.typeName}
                    </Badge>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                  >
                    {item.name}
                  </Box>
                  <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                  >
                    thickness {item.thickness} lb
                  </Box>
                  <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                  >
                    added {getDateFormatted(item.CreatedAt)}
                  </Box>

                </Box>
              </Box>
            </WrapItem>
          )
        }) :
          <NoDataAlert title={'lines'} />
      }
      {
        isTackle ? <LineDetailForTackleModal /> : <LineDetailModal />
      }
    </Wrap>
  )
}