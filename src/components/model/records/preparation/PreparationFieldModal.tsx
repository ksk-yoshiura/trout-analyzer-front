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

type FieldData = {
  name?: string;
  address?: string;
  image?: string;
}

export default function PreparationFieldModal() {
  const chosenId = '0'
  const vacantData: FieldData = { name: '', address: '' }

  const { isOpen, onOpen, onClose: onFieldModalClose } = useDisclosure()
  return (
    <>
    <Button onClick={onOpen} mr={5} pl={10} pr={10} colorScheme='teal'>New Field</Button>
    <Modal isOpen={isOpen} onClose={onFieldModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Register New Field</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FieldForm chosenId={chosenId} data={vacantData} onFieldModalClose={onFieldModalClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
  )
}