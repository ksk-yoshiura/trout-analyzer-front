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
import ReelDetail from './ReelDetail'
import useSWR from 'swr'
import { ReelsApiResponse } from "../../../pages/api/reels/index"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function ReelsList(): JSX.Element {
  // モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)
  // APIからデータ取得
  const { data, error } = useSWR<ReelsApiResponse, Error>('/api/reels/', fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  const ReelDetailModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reel Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ReelDetail chosenId={chosenId} />
          </ModalBody>

          <ModalFooter>
            <NextLink href={"/fields/edit/" + chosenId} passHref>
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
          data.reels?.map((item, index) => {
            return (
              <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.id) }} as={"button"}>
                <Box w={160} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={item.imageUrl} alt={item.imageAlt} />

                  <Box p='2'>
                    <Box display='flex' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                        New
                      </Badge>
                      <Badge borderRadius='full' px='2' color='gray.500'>
                        {item.gear}
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
                      added {item.createdAt}
                    </Box>

                  </Box>
                </Box>
              </WrapItem>
            )
          })
        }
        <ReelDetailModal />

      </Wrap>
    </>
  )
}