import {
  Box,
  Image,
  Stack
} from '@chakra-ui/react'
import { RecordDetailMock } from './record_detail_mock'
import RecordPatternBadgeDetail from './partial/RecordPatternBadgeDetail'
import RecordPatternLureDetail from './partial/RecordPatternLureDetail'

type DetailProps = {
  chosenId: number
}

export default function RecordPatternDetail(props: DetailProps): JSX.Element {
  const property = RecordDetailMock
  // TODO：IDを取り出して詳細を取得
  console.log(props)

  const { result, weather, depth } = property.badge
  const { lureType, lureName, lureCompany, lureColor, lureWeight } = property.lure


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

        <RecordPatternLureDetail 
          lureType={lureType} 
          lureName={lureName} 
          lureCompany={lureCompany}
          lureColor={lureColor}
          lureWeight={lureWeight}
        />

      </Box>
    </Box>
  )
}