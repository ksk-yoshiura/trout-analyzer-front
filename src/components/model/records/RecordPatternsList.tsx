import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Image,
  Badge,
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
import { RecordListtMock } from './record_list_mock'
import RecordPatternDetail from './RecordPatternDetail'

export default function RecordsAllList(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)


  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  const RecordPatternDetailModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pattern Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RecordPatternDetail chosenId={chosenId} />
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
      <Stack spacing={5} mr={5}>
        {
          RecordListtMock.map((item, index) => {
            return (
              <Box
                key={index}
                onClick={() => {
                  onOpen(),
                    clickHandler(item.id)
                }}
                as={"button"}
                display="flex"
                w='100wh'
                maxW='sm'
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
              >
                <Image p='2' w='40%' src={item.imageUrl} alt={item.imageAlt} />

                <Box pt='2' w='60%'>
                  <Box display='inline-block' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                      {item.result}
                    </Badge>
                    <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
                      {item.lureType}
                    </Badge>
                    <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
                      {item.weather}
                    </Badge>
                    <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
                      {item.depth}
                    </Badge>
                    <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
                      {item.speed}
                    </Badge>
                  </Box>
                  <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                  >
                    time {item.createdAt}
                  </Box>
                </Box>
              </Box>
            )
          })
        }

        <RecordPatternDetailModal />

      </Stack>
    </>
  )
}