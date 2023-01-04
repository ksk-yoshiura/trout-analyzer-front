import type { NextApiRequest, NextApiResponse } from 'next'

import type { RodBasic, RodDetail, RodHardnessCondition, RodImage } from '../../../types/rod'

// API のレスポンス型
export type RodDetailApiResponse = {
  result?: RodDetail<RodBasic, RodImage, RodHardnessCondition>
  status: number
  message?: string
}

// API のエントリポイント
export default function RodsApi(
  req: NextApiRequest,
  res: NextApiResponse<RodDetailApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
