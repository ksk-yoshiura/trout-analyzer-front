import React, { useState } from 'react'
import {
  Box,
  Image,
  Badge,
  Wrap,
  WrapItem,
  useDisclosure
} from '@chakra-ui/react'
import RodDetail from './RodDetail'
import DetailModal from '../../shared/DetailModal'
import Loading from '../../shared/Loading'
import useSWR, { mutate } from 'swr'
import { RodsApiResponse } from "../../../pages/api/rods/index"

// タックルフォームで呼び出す場合
type DetailProp = {
  field?: any
}

export default function RodsList(props: DetailProp): JSX.Element {
  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  // APIからデータ取得
  const { data, error } = useSWR<RodsApiResponse, Error>('rods')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  // モーダルを部分的に移行し共通化
  const RodDetailModal = () => {
    return (
      <DetailModal isOpen={isOpen} onClose={onClose} chosenId={chosenId} title={'rod'} mutate={mutate} >
        <RodDetail chosenId={chosenId} />
      </DetailModal>
    )
  }

  return (
    <>
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
          })
        }
        <RodDetailModal />

      </Wrap>
    </>
  )
}