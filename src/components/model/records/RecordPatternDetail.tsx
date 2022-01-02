import {
  Box,
  Image,
  Stack
} from '@chakra-ui/react'
import { RecordDetailMock } from './record_detail_mock'
import RecordPatternBadgeDetail from './partial/RecordPatternBadgeDetail'

type DetailProps = {
  chosenId: number
}

export default function RecordPatternDetail(props: DetailProps): JSX.Element {
  const property = RecordDetailMock
  // TODO：IDを取り出して詳細を取得
  console.log(props)

  const { lureType, result, weather, depth } = property.badge

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} borderRadius='lg' />

      <Box p='6'>
        <RecordPatternBadgeDetail 
          lureType={lureType} 
          result={result} 
          weather={weather}
          depth={depth}
        />

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