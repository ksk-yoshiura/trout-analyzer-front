import { 
  Box, 
  Image, 
  Badge,
  Stack 
} from '@chakra-ui/react'
import { LineDetailMock } from './line_detail_mock'

type DetailProps = {
  chosenId: number
}

export default function RodDetail(props: DetailProps): JSX.Element {
  const property = LineDetailMock
  // TODO：IDを取り出して詳細を取得
  console.log(props)

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} borderRadius='lg' />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' color='gray.500'>
            {property.lureType}
          </Badge>
        </Box>

        <Box
          my='2'
          fontWeight='semibold'
          fontSize={18}
          as='h3'
          lineHeight='tight'
          isTruncated
        >
          {property.name}
        </Box>

        <Stack
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          ml='2'
          spacing={1}
        >
          <Box>
            WEIGHT {property.weight} g
          </Box>
          <Box textTransform='uppercase'>
            COLOR {property.color}
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {property.company}
          </Box>
          <Box textTransform='uppercase'>
            FREQUENCY {property.frequency} times
          </Box>
          <Box>
            ADDED {property.createdAt}
          </Box>
          <Box>
            LAST USED {property.lastUsedAt}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}