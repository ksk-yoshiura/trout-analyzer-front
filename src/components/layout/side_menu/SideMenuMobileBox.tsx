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
  LinkOverlay,
  Divider
} from '@chakra-ui/react'
import {
  HamburgerIcon
} from "@chakra-ui/icons";
import EquipmentMenuLinkList from './EquipmentMenuLinkList'
import RecordsMenuLinkList from './RecordsMenuLinkList'
import SNSLinkButton from './SNSLinkButton'

export default function SideMenuContents() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Stack
      py={1}
      px={2}
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
            <LinkOverlay href="/" >
              <Button
                colorScheme='teal'
                variant='ghost'
                fontWeight='bold'
                fontSize='20px'
                pt={5}
                pb={10}
              >
                Trout Analyzer
              </Button>
            </LinkOverlay>
            <Divider />

          </DrawerHeader>

          <DrawerBody>
            <Stack spacing='10px'>
              <EquipmentMenuLinkList />
              <RecordsMenuLinkList />
            </Stack>
          </DrawerBody>

          <DrawerFooter
            justifyContent="space-between"
            flexDirection="column"
          >
            <SNSLinkButton />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  )
};