import type { NextApiRequest, NextApiResponse } from 'next'

export type PatternAnalysis = {
  Sum: number
  ColorName: string
  ColorCode: string
  ResultType: string
  DepthType: string
}

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
}