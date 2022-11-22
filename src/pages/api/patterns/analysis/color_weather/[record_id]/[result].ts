import type { NextApiRequest, NextApiResponse } from 'next'

import type { PatternColorWeatherAnalysis } from '../../../../../../types/analysis/color'

// API のレスポンス型
export type ColorWeatherAnalysisApiResponse = {
  result?: PatternColorWeatherAnalysis[]
  status: number
  message?: string
}

// API のエントリポイント
export default function ColorWeatherAnalysisApi(
  req: NextApiRequest,
  res: NextApiResponse<ColorWeatherAnalysisApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}