import type { NextApiRequest, NextApiResponse } from 'next'

import type { PatternAnalysis } from '../../../../../../types/analysis/color'

// API のレスポンス型
export type ColorDepthAnalysisApiResponse = {
  result?: PatternAnalysis[]
  status: number
  message?: string
}

// API のエントリポイント
export default function ColorDepthAnalysisApi(
  req: NextApiRequest,
  res: NextApiResponse<ColorDepthAnalysisApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}