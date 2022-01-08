import {
  Box,
  Image
} from '@chakra-ui/react'
import { RecordDetailMock } from '../mock/records/record_detail_mock'
import RecordPatternBadgeDetail from './pattern_detail_partial/RecordPatternBadgeDetail'
import RecordPatternLureDetail from './pattern_detail_partial/RecordPatternLureDetail'
import RecordPatternReelDetail from './pattern_detail_partial/RecordPatternReelDetail'
import RecordPatternRodDetail from './pattern_detail_partial/RecordPatternRodDetail'
import RecordPatternLineDetail from './pattern_detail_partial/RecordPatternLineDetail'

type DetailProps = {
  chosenId: number
}

export default function RecordPatternDetail(props: DetailProps): JSX.Element {
  const property = RecordDetailMock
  // TODO：IDを取り出して詳細を取得
  console.log(props)

  const { result, weather, depth, speed } = property.badge
  const { lureType, lureName, lureCompany, lureColor, lureWeight } = property.lure
  const { reelType, reelName, reelCompany, reelGear } = property.reel
  const { rodName, rodHardness, rodLength, rodCompany } = property.rod
  const { lineName, lineThickness, lineType, lineCompany } = property.line


  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} borderRadius='lg' />

      <Box p='6'>
        <RecordPatternBadgeDetail
          lureType={lureType}
          result={result}
          weather={weather}
          depth={depth}
          speed={speed}
        />

        <RecordPatternLureDetail
          lureType={lureType}
          lureName={lureName}
          lureCompany={lureCompany}
          lureColor={lureColor}
          lureWeight={lureWeight}
        />

        <RecordPatternReelDetail
          reelName={reelName}
          reelType={reelType}
          reelCompany={reelCompany}
          reelGear={reelGear}
        />

        <RecordPatternRodDetail
          rodName={rodName}
          rodHardness={rodHardness}
          rodCompany={rodCompany}
          rodLength={rodLength}
        />

        <RecordPatternLineDetail
          lineName={lineName}
          lineThickness={lineThickness}
          lineCompany={lineCompany}
          lineType={lineType}
        />
      </Box>
    </Box>
  )
}