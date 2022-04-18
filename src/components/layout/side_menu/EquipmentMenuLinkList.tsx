import React from 'react'
import {
  Link,
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
              Equipment
            </Button>
            <Divider />
          </>
      }
    </>
  )
};