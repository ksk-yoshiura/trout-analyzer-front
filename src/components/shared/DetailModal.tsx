import { ReactNode } from "react";
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
} from '@chakra-ui/react'
import NextLink from "next/link"

type DetailProps = {
  chosenId?: number
  title: string
  children?: ReactNode;
}

export default function DetailModal(props: DetailProps) {
  // 削除モーダル
  const { isOpen, onOpen, onClose } = useDisclosure()
  // 各値
  const { chosenId, title, children } = props
  // 編集ページリンク
  const editURL = '/' + title + 's/edit/' + chosenId
  // 詳細モーダルタイトル
  const modalTitle = title

  // 削除モーダル
  const DeletelModal = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h={125} margin={'auto'}>
          <ModalCloseButton />
          <ModalHeader></ModalHeader>
          <ModalBody display={'flex'} justifyContent={'space-around'}>
            <Button colorScheme='gray' variant='solid'>Cancel</Button>
            <Button colorScheme='red' variant='solid'>Confirm Delete</Button>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
  }

  return ( // 詳細モーダル
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textTransform={'capitalize'}>{modalTitle + ' Detail'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>

        <ModalFooter display={'flex'} justifyContent={'space-between'}>
          <Button colorScheme='red' variant='solid' onClick={() => onOpen()}>Delete</Button>
          <NextLink href={editURL} passHref>
            <Button colorScheme='blue' variant='solid'>Edit</Button>
          </NextLink>
        </ModalFooter>
      </ModalContent>
      <DeletelModal />
    </>
  )
}