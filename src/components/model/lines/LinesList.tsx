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
import { LineListMock } from '../mock/lines/line_list_mock'
import LineDetail from './LineDetail'

export default function LinesList(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  const LineDetailModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Line Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LineDetail chosenId={chosenId} />
          </ModalBody>

          <ModalFooter>
            <NextLink href={"/lines/edit/" + chosenId}  passHref>
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
          LineListMock.map((item, index) => {
            return (
              <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.id) }} as={"button"}>
                <Box w={160} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={item.imageUrl} alt={item.imageAlt} />

                  <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                        New
                      </Badge>
                      <Badge borderRadius='full' px='2' color='gray.500'>
                        {item.lineType}
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
                      thickness {item.thickness} lb
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
        <LineDetailModal />

      </Wrap>
    </>
  )
}