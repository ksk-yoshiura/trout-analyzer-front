import type { NextApiRequest, NextApiResponse } from 'next'

export type PatternAnalysis = {
  Sum: number
  ColorName: string
  ColorCode: string
  ResultType: string
  LureType: string
}

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