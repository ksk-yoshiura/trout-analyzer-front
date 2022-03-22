import React, { useState } from 'react'
import {
  Box,
  Image,
  Wrap,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react'
import DetailModal from '../../shared/DetailModal'
import Loading from '../../shared/Loading'
import TackleDetail from './TackleDetail'
import useSWR from 'swr'
import { TacklesApiResponse } from "../../../pages/api/tackles/index"

export default function TacklesList(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)
  // APIからデータ取得
  const { data, error } = useSWR<TacklesApiResponse, Error>('tackles')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
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
          data.result?.map((item, index) => {
            return (
              <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.ID) }} type='button' as={"button"}>
                <Box w={450} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' display='flex'>
                  <Box w={150} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={item.Rod.imageUrl} alt={item.Rod.imageAlt} />
                    <Box p='2'>
                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h3'
                        lineHeight='tight'
                      >
                        {item.Rod.name}
                      </Box>

                    </Box>
                  </Box>
                  <Box w={150} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={item.Reel.imageUrl} alt={item.Reel.imageAlt} />
                    <Box p='2'>
                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                      >
                        {item.Reel.name}
                      </Box>

                    </Box>
                  </Box>
                  <Box w={150} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={item.Line.imageUrl} alt={item.Line.imageAlt} />
                    <Box p='2'>
                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                      >
                        {item.Line.name}
                      </Box>

                    </Box>
                  </Box>
                </Box>
              </WrapItem>
            )
          })
        }
        <TackleDetailModal />

      </Wrap>
    </>
  )
}