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

import { SettingMenuData } from './setting_menu_data'

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
              Settings
            </Button>
            <Divider />
            <Stack>
              <List spacing={3}>
                {
                  SettingMenuData.map((item, index) => {
                    return (
                      <Stack key={index}>
                        <ListItem pl='10' >
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
              Settings
            </Button>
            <Divider />
          </>
      }
    </>
  )
};