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
import { FieldListtMock } from './field_list_mock'
import FieldDetail from './FieldDetail'

export default function FieldsList(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chosenId, idState] = useState(0)

  function clickHandler(value: string) {
    // 型変換
    const lureIdNumber = Number(value)

    // クリックされたカードから得たIDを更新
    idState(lureIdNumber)
  }

  const FieldDetailModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reel Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FieldDetail chosenId={chosenId} />
          </ModalBody>

          <ModalFooter>
            <NextLink href={"/fields/edit/" + chosenId}  passHref>
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
          FieldListtMock.map((item, index) => {
            return (
              <WrapItem key={index} onClick={() => { onOpen(), clickHandler(item.id) }} as={"button"}>
                <Box w={230} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={item.imageUrl} alt={item.imageAlt} />

                  <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                        New
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
                      last visited {item.lastVisited}
                    </Box>

                  </Box>
                </Box>
              </WrapItem>
            )
          })
        }
        <FieldDetailModal />

      </Wrap>
    </>
  )
}