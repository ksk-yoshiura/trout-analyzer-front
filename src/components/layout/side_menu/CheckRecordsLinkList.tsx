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
import { CheckRecordsMenuData } from './check_records_menu_data'

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
          Check Records
        </Text>
        <Stack>
          <List spacing={3}>
            {
              CheckRecordsMenuData.map((item, index) => {
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
          Check Records
        </Text>
      }
    </>
  )
};