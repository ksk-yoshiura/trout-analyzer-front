import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'

type ModalProps = {
  isOpen: boolean;
  lureId: number;
}

export default function LureDetailModal({ isOpen, lureId }: ModalProps ) {
  const { onClose } = useDisclosure()
  console.log(isOpen)
  console.log(lureId)
  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

          </ModalBody>

          <ModalFooter>
            <Button variant='ghost'>Delete</Button>
            <Button variant='ghost'>Edit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}