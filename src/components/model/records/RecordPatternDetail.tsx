import {
  Box
} from '@chakra-ui/react'
import React from 'react';
import useSWR from 'swr'

import type { PatternApiResponse } from "../../../pages/api/patterns/[id]"
import type { DetailProps } from "../../../types/shared/detail"
import Loading from '../../shared/Loading'
import RecordPatternBadgeDetail from './pattern_detail_partial/RecordPatternBadgeDetail'
import RecordPatternLineDetail from './pattern_detail_partial/RecordPatternLineDetail'
import RecordPatternLureDetail from './pattern_detail_partial/RecordPatternLureDetail'
import RecordPatternReelDetail from './pattern_detail_partial/RecordPatternReelDetail'
import RecordPatternRodDetail from './pattern_detail_partial/RecordPatternRodDetail'

export default function RecordPatternDetail(props: DetailProps): JSX.Element {
  // ID取得
  const { chosenId } = props
  // APIからデータ取得
  const { data } = useSWR<PatternApiResponse, Error>('patterns/' + chosenId)
  if (!data) return <Loading />

  return (
    <Box maxW='sm' overflow='hidden'>
      {
        data.result ?
          <Box p='2'>
            <RecordPatternBadgeDetail
              lureType={data.result.Lure.LureType.typeName}
              result={data.result.ResultCondition.typeName}
              weather={data.result.WeatherCondition.typeName}
              depth={data.result.DepthCondition.typeName}
              speed={data.result.SpeedCondition.typeName}
            />

            <RecordPatternLureDetail
              lureName={data.result.Lure.name}
              lureCompany={data.result.Lure.companyName}
              lureColor={data.result.Lure.Color.name}
              lureWeight={data.result.Lure.weight}
              lureImage={data.result.Lure.LureImage}
            />

            {
              data.result.Tackle.ID ? <>
                <RecordPatternReelDetail
                  reelName={data.result.Tackle.Reel.name}
                  reelType={data.result.Tackle.Reel.TypeNumberCondition.typeName}
                  reelCompany={data.result.Tackle.Reel.companyName}
                  reelGear={data.result.Tackle.Reel.GearCondition.typeName}
                />

                <RecordPatternRodDetail
                  rodName={data.result.Tackle.Rod.name}
                  rodHardness={data.result.Tackle.Rod.RodHardnessCondition.typeName}
                  rodCompany={data.result.Tackle.Rod.companyName}
                  rodLength={data.result.Tackle.Rod.length}
                />

                <RecordPatternLineDetail
                  lineName={data.result.Tackle.Line.name}
                  lineThickness={data.result.Tackle.Line.thickness}
                  lineCompany={data.result.Tackle.Line.companyName}
                  lineType={data.result.Tackle.Line.LineCondition.typeName}
                /></>
                : <></>
            }

          </Box>

          : <></>
      }
    </Box>
  )
}