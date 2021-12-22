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
import CheckRecordsLinkList from './CheckRecordsLinkList'
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
        <DrawerContent style={{ width: "250px" }}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link href="/" >
              <Button
                colorScheme='teal'
                variant='ghost'
                fontWeight='bold' 
                fontSize='20px'
              >
                Trout Analyzer
              </Button>
            </Link>

          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              <RegisterMenuLinkList />
              <CheckRecordsLinkList />
            </Stack>
          </DrawerBody>

          <DrawerFooter justifyContent="space-between">
            <SNSLinkButton />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  )
};