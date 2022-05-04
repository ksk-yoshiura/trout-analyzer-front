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
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import RodDetail from './RodDetail'
import DetailModal from '../../shared/DetailModal'
import NoDataAlert from '../../shared/NoDataAlert'
import DetailTackleModal from '../../shared/DetailTackleModal'
import Loading from '../../shared/Loading'
import useSWR, { mutate } from 'swr'
import { RodsApiResponse } from "../../../pages/api/rods/index"

type ListProps = {
  isTackle: boolean
  setNewRodId?: React.Dispatch<React.SetStateAction<number>>;
}

export default function RodsList(props: ListProps): JSX.Element {
  // タックルフォームでの呼び出しの場合
  const { isTackle, setNewRodId } = props
  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  // APIからデータ取得
  const { data, error } = useSWR<RodsApiResponse, Error>('rods')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  // ロッドデータ
  const rodsListData = data.result ? data.result : []

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)
    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  // タックル用ロッド選択
  function selectRodForTackleHandler(event: any) {
    const { target } = event
    const selectId = target.value
    console.log(selectId)
    setNewRodId ? setNewRodId(selectId) : null
  }

  // モーダルを部分的に移行し共通化
  const RodDetailModal = () => {
    return (
      <DetailModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'rod'} mutate={mutate} >
        <RodDetail chosenId={chosenId} />
      </DetailModal>
    )
  }

  // タックル用モーダル
  const RodDetailForTackleModal = () => {
    return (
      <DetailTackleModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'rod'} >
        <ModalBody>
          <RodDetail chosenId={chosenId} />
        </ModalBody>

        <ModalFooter display={'flex'} justifyContent={'space-between'}>
          <Button variant='solid' onClick={() => onClose()}>Cancel</Button>
          <Button
            colorScheme='blue'
            value={chosenId}
            variant='solid'
            onClick={
              (event) => {
                selectRodForTackleHandler(event);
                onClose()
              }
            }>Select</Button>
        </ModalFooter>
      </DetailTackleModal>
    )
  }

  return (
    <>
      <Wrap spacing={5}>
        {
          rodsListData.length > 0 ? rodsListData.map((item, index) => {
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
                        {item.RodHardnessCondition.typeName}
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
                      length {item.length} ft
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
          }) :
            <NoDataAlert title={'rods'} />
        }
        {
          isTackle ? <RodDetailForTackleModal /> : <RodDetailModal />
        }
      </Wrap>
    </>
  )
}