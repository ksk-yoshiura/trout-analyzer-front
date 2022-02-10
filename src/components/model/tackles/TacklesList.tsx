import { useState } from 'react'
import {
  Box,
  Image,
  Badge,
  Wrap,
  WrapItem,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import NextLink from "next/link"
import { RodListMock } from '../mock/rods/rod_list_mock'
import RodDetail from './TackleDetail'

import useSWR from 'swr'
import { TacklesApiResponse } from "../../../pages/api/tackles/index"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})


export default function TacklesList(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)
  // APIからデータ取得
  const { data, error } = useSWR<TacklesApiResponse, Error>('/api/tackles/', fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  const TackleDetailModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tackle Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RodDetail chosenId={chosenId} />
          </ModalBody>

          <ModalFooter>
            <NextLink href={"/tackles/edit/" + chosenId}  passHref>
              <Button variant='ghost'>Edit</Button>
            </NextLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }

  return (
    <>
      <Wrap spacing={5}>
        {
          data.tackles?.map((item, index) => {
            return (
              <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.id) }} as={"button"}>
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