import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import NextLink from "next/link"
import type { ReactNode } from "react";
import React from "react";
import { mutate } from 'swr';

import { CreateAxiosInstance } from "../../pages/api/utils"

type DetailProps = {
  chosenId?: number
  title: string
  isOpen: boolean
  onClose: any
  children?: ReactNode;
}

export default function DetailModal(props: DetailProps): JSX.Element {
  // 削除モーダル
  const {
    isOpen: isConfirmOpen,
    onOpen: onConfirmOpen,
    onClose: onConfirmClose
  } = useDisclosure()
  // 各値
  const { chosenId, title, children, isOpen, onClose } = props
  // 編集ページリンク
  const editURL = '/' + title + 's/edit/' + chosenId
  // 削除API
  const deleteAPIURL = title + 's/' + chosenId
  // 削除後リスト更新
  const updateListURL = title + 's'
  // 詳細モーダルタイトル
  const modalTitle = title
  // アラート
  const toast = useToast()
  // axiosの設定
  const axiosInstance = CreateAxiosInstance()

  // 削除ボタンクリック時の挙動
  const handleDeleteButtonClick = () => {
    // 削除完了後モーダルを閉じる
    axiosInstance.post(deleteAPIURL)
      .then(() => { // 成功時
        // アラート代わりにトーストを使用
        toast({
          title: 'Deleted!',
          description: "We've deleted your data for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        mutate(updateListURL)
      })
      .catch((error) => { // 失敗時
        // アラート代わりにトーストを使用
        toast({
          title: 'Failed!',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }).finally(() => {
        // モーダルを閉じる
        onConfirmClose()
        onClose()
      });
  }

  // 削除モーダル
  const DeletelModal = () => {
    return (
      <Modal isOpen={isConfirmOpen} onClose={onConfirmClose}>
        <ModalOverlay />
        <ModalContent h={125} margin={'auto'}>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody display={'flex'} justifyContent={'space-around'}>
            <Button
              onClick={onConfirmClose}
              colorScheme='gray'
              variant='solid'
            >Cancel</Button>
            <Button
              colorScheme='red'
              variant='solid'
              onClick={() => { return handleDeleteButtonClick() }}
            >Confirm Delete</Button>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }

  return ( // 詳細モーダル
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textTransform={'capitalize'}>{modalTitle + ' Detail'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>

        <ModalFooter display={'flex'} justifyContent={'space-between'}>
          <Button colorScheme='red' variant='solid' onClick={() => { return onConfirmOpen() }}>Delete</Button>
          <NextLink href={editURL} passHref>
            <Button colorScheme='blue' variant='solid'>Edit</Button>
          </NextLink>
        </ModalFooter>
      </ModalContent>
      <DeletelModal />
    </Modal>
  )
}