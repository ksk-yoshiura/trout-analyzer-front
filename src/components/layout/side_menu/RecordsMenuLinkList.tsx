import React from 'react'
import {
  Button,
  LinkOverlay,
  List,
  ListItem,
  ListIcon,
  Stack,
  useDisclosure,
  Divider
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { RecordsMenuData } from './records_menu_data'

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
              Records
            </Button>
            <Divider />
            <Stack>
              <List spacing={3}>
                {
                  RecordsMenuData.map((item, index) => {
                    return (
                      <>
                        <ListItem pl='10px' key={index}>
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
              Records
            </Button>
            <Divider />
          </>
      }
    </>
  )
};