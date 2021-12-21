import {
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
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
        <Text 
          onClick={onClose}
        >
          Register
        </Text>
        <Stack>
          <List spacing={3}>
            {
              RegisterMenuData.map((item, index) => {
                return (
                  <ListItem key={index}>
                    <Link href={item.path}>
                      <ListIcon as={ArrowForwardIcon} color='green.500' />
                      {item.title}
                    </Link>
                  </ListItem>
                )
              })
            }
          </List>
        </Stack>
        </>
        :
        <Text 
          onClick={onOpen}
        >
          Register
        </Text>
      }
    </>
  )
};