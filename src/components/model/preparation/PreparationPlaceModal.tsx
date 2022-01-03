import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import FieldForm from '../fields/FieldForm'

export default function PreparationPlaceModal() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button onClick={onOpen} mr={5} pl={10} pr={10} colorScheme='teal'>New Place</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Register New Place</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FieldForm />

        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  )
}