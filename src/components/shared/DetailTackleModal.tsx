import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import type { ReactNode } from 'react';
import React from 'react'

type DetailProps = {
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