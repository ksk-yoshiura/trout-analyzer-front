import {
  Button,
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
        <Button 
          colorScheme='teal' 
          variant='ghost'
          onClick={onClose}
        >
          Check Records
        </Button>
        <Stack>
          <List spacing={3}>
            {
              CheckRecordsMenuData.map((item, index) => {
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
          Check Records
        </Button>
      }
    </>
  )
};