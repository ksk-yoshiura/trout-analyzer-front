import { useState } from 'react'
import {
  Box,
  Image,
  Wrap,
  WrapItem,
  Stack,
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
import { RecordListtMock } from './record_list_mock'
import RecordDetail from './RecordDetail'

export default function RecordsAllList(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  const RecordDetailModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reel Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RecordDetail chosenId={chosenId} />
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost'>Edit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }


  return (
    <>
      <Stack spacing={5} mr={10}>
        {
          RecordListtMock.map((item, index) => {
            return (
              <NextLink key={index} href={"/records/detail/" + item.id} passHref>
                <Box
                  key={index}
                  display="flex"
                  w='100wh'
                  maxW='sm'
                  borderWidth='1px'
                  borderRadius='lg'
                  as={"button"}
                  overflow='hidden'
                  onClick={
                    () => {
                      onOpen(),
                      clickHandler(item.id)
                    }
                  }
                >
                  <Image p='2' w='40%' src={item.imageUrl} alt={item.imageAlt} />

                  <Box p='2' w='50%'>
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
                      sum {item.caughtSum}
                    </Box>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      visited {item.visitedAt}
                    </Box>

                  </Box>
                </Box>
              </NextLink>
            )
          })
        }

      </Stack>
    </>
  )
}