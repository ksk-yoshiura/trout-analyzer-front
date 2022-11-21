import type { NextApiRequest, NextApiResponse } from 'next'

import type { PatternAnalysis } from '../../../../../../types/analysis/color'

// API のレスポンス型
export type ColorLureTypeAnalysisApiResponse = {
  result?: PatternAnalysis[]
  status: number
  message?: string
}

// API のエントリポイント
export default function ColorLureTypeAnalysisApi(
  req: NextApiRequest,
  res: NextApiResponse<ColorLureTypeAnalysisApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}