import React, { useState } from 'react'
import {
  Box,
  Image,
  Wrap,
  WrapItem,
  useDisclosure,
  Modal,
} from '@chakra-ui/react'
import DetailModal from '../../shared/DetailModal'
import TackleDetail from './TackleDetail'
import useSWR from 'swr'
import { TacklesApiResponse } from "../../../pages/api/tackles/index"

export default function TacklesList(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)
  // APIからデータ取得
  const { data, error } = useSWR<TacklesApiResponse, Error>('/api/tackles/')
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  // モーダルを部分的に移行し共通化
  // 完全移行はonOpen()が動作しなくなるので断念
  const TackleDetailModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <DetailModal chosenId={chosenId} title={'tackle'} >
          <TackleDetail chosenId={chosenId} />
        </DetailModal>
      </Modal>
    )
  }

  return (
    <>
      <Wrap spacing={5}>
        {
          data.tackles?.map((item, index) => {
            return (
              <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.id) }} type='button' as={"button"}>
                <Box w={450} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' display='flex'>
                  <Box w={150} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={item.rod.imageUrl} alt={item.rod.imageAlt} />
                    <Box p='2'>
                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h3'
                        lineHeight='tight'
                      >
                        {item.rod.name}
                      </Box>

                    </Box>
                  </Box>
                  <Box w={150} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={item.reel.imageUrl} alt={item.reel.imageAlt} />
                    <Box p='2'>
                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                      >
                        {item.reel.name}
                      </Box>

                    </Box>
                  </Box>
                  <Box w={150} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={item.line.imageUrl} alt={item.line.imageAlt} />
                    <Box p='2'>
                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                      >
                        {item.line.name}
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