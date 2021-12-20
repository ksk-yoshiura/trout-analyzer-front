import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  IconButton,
  useDisclosure,
  Link
} from '@chakra-ui/react'
import {
  HamburgerIcon
} from "@chakra-ui/icons";
import RegisterMenuLinkList from './RegisterMenuLinkList'
import SNSLinkButton from './SNSLinkButton'

export default function SideMenuContents() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Stack
      pt="20px"
      px="20px"
    >
      <Button
        ref={btnRef}
        as={IconButton}
        icon={<HamburgerIcon />}
        aria-label='Options'
        onClick={onOpen}
      >
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{ width: "50%" }}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link href="/">
              Trout Analyzer
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <RegisterMenuLinkList />
            </Stack>
          </DrawerBody>

          <DrawerFooter justifyContent="space-around">
            <SNSLinkButton />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  )
};