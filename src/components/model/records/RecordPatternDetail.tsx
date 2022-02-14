import React from 'react';
import {
  Box,
  Image
} from '@chakra-ui/react'
import RecordPatternBadgeDetail from './pattern_detail_partial/RecordPatternBadgeDetail'
import RecordPatternLureDetail from './pattern_detail_partial/RecordPatternLureDetail'
import RecordPatternReelDetail from './pattern_detail_partial/RecordPatternReelDetail'
import RecordPatternRodDetail from './pattern_detail_partial/RecordPatternRodDetail'
import RecordPatternLineDetail from './pattern_detail_partial/RecordPatternLineDetail'
import useSWR from 'swr'
import { PatternApiResponse } from "../../../pages/api/patterns/[id]"
import axios from'axios'

const fetcher = (url: string) => axios(url)
.then((res) => {
  return res.data
})

type DetailProps = {
  chosenId: number
}

export default function RecordPatternDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data, error } = useSWR<PatternApiResponse, Error>('/api/patterns/' + chosenId, fetcher)
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>Loading...</p>

  return (
    <Box maxW='sm' overflow='hidden'>
      <Image src={data.pattern?.imageUrl} alt={data.pattern?.imageAlt} borderRadius='lg' />

      {
        data.pattern ?
          <Box p='2'>
            <RecordPatternBadgeDetail
              lureType={data.pattern.lure.lureType}
              result={data.pattern.badge.result}
              weather={data.pattern.badge.weather}
              depth={data.pattern.badge.depth}
              speed={data.pattern.badge.speed}
            />

            <RecordPatternLureDetail
              lureType={data.pattern.lure.lureType}
              lureName={data.pattern.lure.lureName}
              lureCompany={data.pattern.lure.lureCompany}
              lureColor={data.pattern.lure.lureColor}
              lureWeight={data.pattern.lure.lureWeight}
            />

            <RecordPatternReelDetail
              reelName={data.pattern.reel.reelName}
              reelType={data.pattern.reel.reelType}
              reelCompany={data.pattern.reel.reelCompany}
              reelGear={data.pattern.reel.reelGear}
            />

            <RecordPatternRodDetail
              rodName={data.pattern.rod.rodName}
              rodHardness={data.pattern.rod.rodHardness}
              rodCompany={data.pattern.rod.rodCompany}
              rodLength={data.pattern.rod.rodLength}
            />

            <RecordPatternLineDetail
              lineName={data.pattern.line.lineName}
              lineThickness={data.pattern.line.lineThickness}
              lineCompany={data.pattern.line.lineCompany}
              lineType={data.pattern.line.lineType}
            />
          </Box>

          : <></>
      }

    </Box>
  )
}