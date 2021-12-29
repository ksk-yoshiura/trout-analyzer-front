import { useState } from 'react'
import {
  Box,
  Image,
  Badge,
  Wrap,
  WrapItem,
  useDisclosure
} from '@chakra-ui/react'
import { LureListtMock } from './lure_list_mock'
import LureDetailModal from './LureDetailModal'

export default function LuresList(): JSX.Element {
  const { isOpen, onOpen } = useDisclosure()
  const [chosenId, idState] = useState(0)


  return (
    <>
      <Wrap spacing={5}>
        {
          LureListtMock.map((item, index) => {
            return (
              <WrapItem key={index} onClick={onOpen} as={"button"}>
                <Box w={230} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={item.imageUrl} alt={item.imageAlt} />

                  <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                      <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
                        New
                      </Badge>
                      <Badge borderRadius='full' px='2' color='gray.500'>
                        {item.lureType}
                      </Badge>
                    </Box>
                    <Box
                      mt='1'
                      fontWeight='semibold'
                      as='h4'
                      lineHeight='tight'
                      isTruncated
                    >
                      {item.name}
                    </Box>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      added {item.createdAt}
                    </Box>

                  </Box>
                </Box>
              </WrapItem>
            )
          })
        }
        <LureDetailModal isOpen={isOpen} lureId={chosenId} />

      </Wrap>
    </>
  )
}