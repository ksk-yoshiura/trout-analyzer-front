import { useState } from 'react'
import {
  Box,
  Image,
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
          <ModalHeader>Reel Detail</ModalHeader>
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
      <Wrap spacing={5}>
          {
            RecordListtMock.map((item, index) => {
              return (
                <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.id) }} as={"button"}>
                  <Box w={230} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
                </WrapItem>
              )
            })
          }

          <RecordPatternDetailModal />

      </Wrap>
    </>
  )
}