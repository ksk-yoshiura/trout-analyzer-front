import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'

import type { FieldDetail, FieldImage } from '../../../../types/field'
import FieldForm from '../../fields/FieldForm'

export default function PreparationFieldModal(): JSX.Element {
  const chosenId = '0'
  const vacantData: FieldDetail<FieldImage> = {
    ID: '',
    lastVisitedAt: '',
    name: '',
    address: '',
    CreatedAt: '',
    FieldImage: {
      ID: '',
      CreatedAt: '',
      field_id: 0,
      image_file: '',
    }
  }

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