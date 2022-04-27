import React, { ReactNode } from 'react'
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Modal,
} from '@chakra-ui/react'

type DetailProps = {
  chosenId?: number
  title: string
  isOpen: boolean
  onClose: any
  children?: ReactNode;
}

export default function DetailTackleModal(props: DetailProps): JSX.Element {
  // 各値
  const { title, children, isOpen, onClose } = props
  // 詳細モーダルタイトル
  const modalTitle = title

  return ( // 詳細モーダル
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textTransform={'capitalize'}>{modalTitle + ' Detail'}</ModalHeader>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </Modal>
  )
}