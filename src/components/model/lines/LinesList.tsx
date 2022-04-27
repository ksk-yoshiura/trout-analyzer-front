import React, { useState } from 'react'
import {
  Box,
  Image,
  Badge,
  Wrap,
  WrapItem,
  useDisclosure,
  Button,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'
import LineDetail from './LineDetail'
import DetailModal from '../../shared/DetailModal'
import DetailTackleModal from '../../shared/DetailTackleModal'
import Loading from '../../shared/Loading'
import useSWR, { mutate } from 'swr'
import { LinesApiResponse } from "../../../pages/api/lines/index"

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
  const { data, error } = useSWR<LinesApiResponse, Error>('lines')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  // タックル用ライン選択
  function selectLineForTackleHandler(event: any) {
    const { target } = event
    const selectId = target.value
    setNewLineId?(selectId) : null
  }

  // モーダルを部分的に移行し共通化
  // 完全移行はonOpen()が動作しなくなるので断念
  const LineDetailModal = () => {
    return (
      <DetailModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'line'} mutate={mutate} >
        <LineDetail chosenId={chosenId} />
      </DetailModal>
    )
  }

  // タックル用モーダル
  const LineDetailForTackleModal = () => {
    return (
      <DetailTackleModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'line'} >
        <ModalBody>
          <LineDetail chosenId={chosenId} />
        </ModalBody>

        <ModalFooter display={'flex'} justifyContent={'space-between'}>
          <Button variant='solid' onClick={() => onClose()}>Cancel</Button>
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
        data.result?.map((item, index) => {
          return (
            <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.ID) }} type='button' as={"button"}>
              <Box w={160} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={item.imageUrl} alt={item.imageAlt} />

                <Box p='2'>
                  <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                      New
                    </Badge>
                    <Badge borderRadius='full' px='2' color='gray.500'>
                      {item.lineType}
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
                    added {item.CreatedAt}
                  </Box>

                </Box>
              </Box>
            </WrapItem>
          )
        })
      }
      {
        isTackle ? <LineDetailForTackleModal /> : <LineDetailModal />
      }
    </Wrap>
  )
}