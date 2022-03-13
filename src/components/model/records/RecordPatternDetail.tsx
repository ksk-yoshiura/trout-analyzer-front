import React from 'react';
import {
  Box,
  Image
} from '@chakra-ui/react'
import Loading from '../../shared/Loading'
import RecordPatternBadgeDetail from './pattern_detail_partial/RecordPatternBadgeDetail'
import RecordPatternLureDetail from './pattern_detail_partial/RecordPatternLureDetail'
import RecordPatternReelDetail from './pattern_detail_partial/RecordPatternReelDetail'
import RecordPatternRodDetail from './pattern_detail_partial/RecordPatternRodDetail'
import RecordPatternLineDetail from './pattern_detail_partial/RecordPatternLineDetail'
import useSWR from 'swr'
import { PatternApiResponse } from "../../../pages/api/patterns/[id]"

type DetailProps = {
  chosenId: number
}

export default function RecordPatternDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data, error } = useSWR<PatternApiResponse, Error>('patterns/' + chosenId)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <Loading />

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={data.result?.imageUrl} alt={data.result?.imageAlt} borderRadius='lg' />

      {
        data.result ?
          <Box p='2'>
            <RecordPatternBadgeDetail
              lureType={data.result.lure.lureType}
              result={data.result.badge.result}
              weather={data.result.badge.weather}
              depth={data.result.badge.depth}
              speed={data.result.badge.speed}
            />

            <RecordPatternLureDetail
              lureType={data.result.lure.lureType}
              lureName={data.result.lure.lureName}
              lureCompany={data.result.lure.lureCompany}
              lureColor={data.result.lure.lureColor}
              lureWeight={data.result.lure.lureWeight}
            />

            <RecordPatternReelDetail
              reelName={data.result.reel.reelName}
              reelType={data.result.reel.reelType}
              reelCompany={data.result.reel.reelCompany}
              reelGear={data.result.reel.reelGear}
            />

            <RecordPatternRodDetail
              rodName={data.result.rod.rodName}
              rodHardness={data.result.rod.rodHardness}
              rodCompany={data.result.rod.rodCompany}
              rodLength={data.result.rod.rodLength}
            />

            <RecordPatternLineDetail
              lineName={data.result.line.lineName}
              lineThickness={data.result.line.lineThickness}
              lineCompany={data.result.line.lineCompany}
              lineType={data.result.line.lineType}
            />
          </Box>

          : <></>
      }

    </Box>
  )
}