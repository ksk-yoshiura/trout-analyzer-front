import {
  Link,
  List,
  ListItem,
  ListIcon,
  Button,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { RegisterMenuData } from './register_menu_data'

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
              Register
            </Button>
            <Stack>
              <List spacing={3}>
                {
                  RegisterMenuData.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        <Link href={item.path}>
                          <ListIcon as={ArrowForwardIcon} color='green.500' />
                          <Button colorScheme='teal' variant='ghost'>
                            {item.title}
                          </Button>
                        </Link>
                      </ListItem>
                    )
                  })
                }
              </List>
            </Stack>
          </>
          :
          <Button
            colorScheme='teal'
            variant='ghost'
            onClick={onOpen}
          >
            Register
          </Button>
      }
    </>
  )
};