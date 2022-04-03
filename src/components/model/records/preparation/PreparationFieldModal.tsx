import React from 'react'
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
import FieldForm from '../../fields/FieldForm'

export default function PreparationFieldModal() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button onClick={onOpen} mr={5} pl={10} pr={10} colorScheme='teal'>New Field</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Register New Field</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FieldForm />
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  )
}