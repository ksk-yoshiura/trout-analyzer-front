import {
  Badge,
  Box,
  Image,
  useDisclosure,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import React, { useState } from 'react'
import useSWR from 'swr'

import type { TacklesApiResponse } from "../../../pages/api/tackles/index"
import DetailModal from '../../shared/DetailModal'
import Loading from '../../shared/Loading'
import NoDataAlert from '../../shared/NoDataAlert'
import TackleDetail from './TackleDetail'

export default function TacklesList(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  // APIからデータ取得
  const { data, error } = useSWR<TacklesApiResponse, Error>('tackles')
  if (!data) return <Loading />
  if (error) return <div>An error has occurred.</div>
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
      <Wrap spacing={5}>
        {
          tacklesListData.length > 0 ? tacklesListData.map((item, index) => {
            return (
              <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.ID) }} type='button' as={"button"}>
                <Box w={450} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' display='flex'>
                  <Box w={150} maxW='sm' borderWidth='1px' pb='1' borderRadius='lg' overflow='hidden'>
                    <Box
                      mt='1'
                      ml='1'
                      fontWeight='semibold'
                      as='h4'
                      textAlign={'left'}
                      lineHeight='tight'
                      color='gray.500'
                      isTruncated
                    >
                      Rod
                    </Box>
                    <Image src={item.Rod.imageUrl} alt={item.Rod.imageAlt} />
                    <Box
                      mt='1'
                      fontWeight='semibold'
                      as='h3'
                      lineHeight='tight'
                    >
                      {item.Rod.name}
                    </Box>

                    <Box display='inline-block' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' color='gray.500'>
                        {item.Rod.RodHardnessCondition.typeName}
                      </Badge>
                    </Box>
                  </Box>
                  <Box w={150} maxW='sm' borderWidth='1px' pb='1' borderRadius='lg' overflow='hidden'>
                    <Image src={item.Reel.imageUrl} alt={item.Reel.imageAlt} />

                    <Box
                      mt='1'
                      ml='1'
                      fontWeight='semibold'
                      as='h4'
                      textAlign={'left'}
                      lineHeight='tight'
                      color='gray.500'
                      isTruncated
                    >
                      Reel
                    </Box>
                    <Box
                      mt='1'
                      fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'
                    >
                      {item.Reel.name}
                    </Box>
                    <Box display='inline-block' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' color='gray.500'>
                        {item.Reel.TypeNumberCondition.typeName}
                      </Badge>
                    </Box>
                  </Box>

                  <Box w={150} maxW='sm' borderWidth='1px' pb='1' borderRadius='lg' overflow='hidden'>
                    <Image src={item.Line.imageUrl} alt={item.Line.imageAlt} />
                    <Box
                      mt='1'
                      ml='1'
                      fontWeight='semibold'
                      as='h4'
                      textAlign={'left'}
                      lineHeight='tight'
                      color='gray.500'
                      isTruncated
                    >
                      Line
                    </Box>
                    <Box
                      mt='1'
                      fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'
                    >
                      {item.Line.name}
                    </Box>

                    <Box display='inline-block' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' color='gray.500'>
                        {item.Line.LineCondition.typeName}
                      </Badge>
                    </Box>
                  </Box>
                </Box>
              </WrapItem>
            )
          }) :
            <NoDataAlert title={'tackles'} />
        }
        <TackleDetailModal />

      </Wrap>
    </>
  )
}