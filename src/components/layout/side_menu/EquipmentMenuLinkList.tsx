import React from 'react'
import {
  LinkOverlay,
  List,
  ListItem,
  ListIcon,
  Button,
  Stack,
  useDisclosure,
  Divider
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { EquipmentMenuData } from './equipment_menu_data'

export default function SnipeMenuLinkList() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      {
        isOpen ?
          <>
            <Button
              colorScheme='teal'
              variant='ghost'
              onClick={onClose}
            >
              Equipment
            </Button>
            <Divider />
            <Stack>
              <List spacing={3}>
                {
                  EquipmentMenuData.map((item, index) => {
                    return (
                      <>
                        <ListItem pl='10' key={index}>
                          <LinkOverlay href={item.path}>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            <Button colorScheme='teal' variant='ghost'>
                              {item.title}
                            </Button>
                          </LinkOverlay>
                        </ListItem>
                        <Divider />
                      </>
                    )
                  })
                }
              </List>
            </Stack>
          </>
          :
          <>
            <Button
              colorScheme='teal'
              variant='ghost'
              onClick={onOpen}
            >
              Equipment
            </Button>
            <Divider />
          </>
      }
    </>
  )
};