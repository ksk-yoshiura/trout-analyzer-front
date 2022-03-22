import React from 'react'
import { ReactNode } from "react";
import { useRouter } from "next/router";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Modal,
  useToast
} from '@chakra-ui/react'
import NextLink from "next/link"
import { createAxiosInstance } from "../../pages/api/utils"

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
  // 詳細モーダルタイトル
  const modalTitle = title
  // アラート
  const toast = useToast()
  // axiosの設定
  const axiosInstance = createAxiosInstance()

  // 削除ボタンクリック時の挙動
  function handleDeleteButtonClick() {
    // 削除完了後モーダルを閉じる
    axiosInstance.post(deleteAPIURL)
      .then(function () { // 成功時
        // アラート代わりにトーストを使用
        toast({
          title: 'Deleted!',
          description: "We've deleted your data for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      })
      .catch(function (error) { // 失敗時
        // アラート代わりにトーストを使用
        toast({
          title: 'Failed!',
          description: error,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }).finally(function () {
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
              onClick={() => handleDeleteButtonClick()}
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
          <Button colorScheme='red' variant='solid' onClick={() => onConfirmOpen()}>Delete</Button>
          <NextLink href={editURL} passHref>
            <Button colorScheme='blue' variant='solid'>Edit</Button>
          </NextLink>
        </ModalFooter>
      </ModalContent>
      <DeletelModal />
    </Modal>
  )
}