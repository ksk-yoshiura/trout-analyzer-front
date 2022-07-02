import { useRouter } from "next/router";
import React, { useState } from 'react'

import ColorDepthGraph from '../records/pattern_analysis/ColorDepthGraph'
import ColorLureTypeGraph from '../records/pattern_analysis/ColorLureTypeGraph'
import ColorWeatherGraph from '../records/pattern_analysis/ColorWeatherGraph'
import ResultRadioGroup from '../records/pattern_analysis/ResultRadioGroup'

export default function RecordPatternAnalysis() {
  // パラメータからレコードID取得
  const router = useRouter();
  const { record_id } = router.query

  // 釣果絞り込み用
  const [targetResult, setTargetResult] = useState('all')

  return (
    <>
      <ResultRadioGroup setTargetResult={setTargetResult} />
      {
        record_id ? <>
          <ColorWeatherGraph recordId={record_id} targetParam={targetResult} />
          <ColorDepthGraph recordId={record_id} targetParam={targetResult} />
          <ColorLureTypeGraph recordId={record_id} targetParam={targetResult} />
        </>
          : <></>
      }
    </>
  )
}