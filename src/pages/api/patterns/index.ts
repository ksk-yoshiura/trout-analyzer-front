import type { NextApiRequest, NextApiResponse } from 'next'

import type { LureImage, LuresList } from "../../../types/lure"
import type { LureType } from "../../../types/lure_type"
import type { DepthCondition, PatternList, ResultCondition, SpeedCondition, WeatherCondition } from "../../../types/pattern"

// API のレスポンス型
export type PatternsListApiResponse = {
  result?: PatternList<ResultCondition, SpeedCondition, DepthCondition, WeatherCondition, LuresList<LureType, LureImage>>[]
  status: number
  message?: string
}

// API のエントリポイント
export default function PatternsApi(
  req: NextApiRequest,
  res: NextApiResponse<PatternsListApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}