import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Button,
  Divider,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import React from 'react'

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
                      <Stack key={index}>
                        <ListItem pl='10'>
                          <Link href={item.path}>
                            <ListIcon as={ArrowForwardIcon} color='green.500' />
                            <Button colorScheme='teal' variant='ghost'>
                              {item.title}
                            </Button>
                          </Link>
                        </ListItem>
                        <Divider />
                      </Stack>
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