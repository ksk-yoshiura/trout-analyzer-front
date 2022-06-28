import type { NextApiRequest, NextApiResponse } from 'next'

export type PatternAnalysis = {
  Sum: number
  ColorName: string
  ColorCode: string
  ResultType: string
  WeatherType: string
}

// API のレスポンス型
export type ColorWeatherAnalysisApiResponse = {
  result?: PatternAnalysis[]
  status: number
  message?: string
}

// API のエントリポイント
export default function ColorWeatherAnalysisApi(
  req: NextApiRequest,
  res: NextApiResponse<ColorWeatherAnalysisApiResponse>
): void {
}