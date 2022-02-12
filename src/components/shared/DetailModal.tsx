import { ReactNode } from "react";
import {
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import NextLink from "next/link"

type DetailProps = {
  chosenId?: number
  title: string
  children?: ReactNode;
} 

export default function DetailModal(props: DetailProps) {
  // 各値
  const { chosenId, title, children } = props
  // 編集ページリンク
  const editURL = '/' + title + 's/edit/' + chosenId
  // モーダルタイトル
  const modalTitle = title 

  return (
    <>
    <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform={'capitalize'}>Line Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            { children }
          </ModalBody>

          <ModalFooter>
            <NextLink href={ editURL }  passHref>
              <Button variant='ghost'>Edit</Button>
            </NextLink>
          </ModalFooter>
        </ModalContent>
    </>
  )
}