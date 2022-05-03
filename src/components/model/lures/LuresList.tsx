import React from 'react'
import { useState } from 'react'
import {
  Box,
  Image,
  Badge,
  Wrap,
  WrapItem,
  useDisclosure,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import LureDetail from './LureDetail'
import DetailModal from '../../shared/DetailModal'
import Loading from '../../shared/Loading'
import useSWR, { mutate } from 'swr'
import { LuresApiResponse } from "../../../pages/api/lures/index"

type ListProps = {
  typeId?: string;
}

export default function LuresList(props: ListProps): JSX.Element {
  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  // ルアータイプID
  const { typeId } = props
  // APIからデータ取得
  const { data, error } = useSWR<LuresApiResponse, Error>('lures?type_id=' + typeId)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />
  // ルアーデータ
  const lureListData = data.result ? data.result : []

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  // モーダルを部分的に移行し共通化
  // 完全移行はonOpen()が動作しなくなるので断念
  const LureDetailModal = () => {
    return (
      <DetailModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'lure'} mutate={mutate} >
        <LureDetail chosenId={chosenId} />
      </DetailModal>
    )
  }

  return (
    <>
      <Wrap spacing={5}>
        {
          lureListData.length > 0 ? lureListData.map((item, index) => {
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
                        {item.LureType.typeName}
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
                      added {item.CreatedAt}
                    </Box>

                  </Box>
                </Box>
              </WrapItem>
            )
          }) :
            <Alert status='error' w="300px">
              <AlertIcon />
              Register new lures!
            </Alert>
        }
        <LureDetailModal />

      </Wrap>
    </>
  )
}