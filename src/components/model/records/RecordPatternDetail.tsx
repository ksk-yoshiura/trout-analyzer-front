import {
  Box,
  Image,
  Badge,
  Stack
} from '@chakra-ui/react'
import { RecordDetailMock } from './record_detail_mock'

type DetailProps = {
  chosenId: number
}

export default function RecordPatternDetail(props: DetailProps): JSX.Element {
  const property = RecordDetailMock
  // TODO：IDを取り出して詳細を取得
  console.log(props)

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} borderRadius='lg' />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' mr={1} colorScheme='teal'>
            {property.result}
          </Badge>
          <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
            {property.lureType}
          </Badge>
          <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
            {property.weather}
          </Badge>
          <Badge borderRadius='full' px='2' mr={1} color='gray.500'>
            {property.depth}
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
          {property.lureName}
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
            WEIGHT {property.lureWeight} g
          </Box>
          <Box textTransform='uppercase'>
            COLOR {property.lureColor}
          </Box>
          <Box textTransform='uppercase'>
            COMPANY {property.lureCompany}
          </Box>
        </Stack>

      </Box>
    </Box>
  )
}