import type { NextApiRequest, NextApiResponse } from 'next'

import type { RodHardnessCondition, RodImage, RodsList } from '../../../types/rod'

// API のレスポンス型
export type RodsListApiResponse = {
  result: RodsList<RodImage, RodHardnessCondition>[]
  status: number
  message?: string
}

// API のエントリポイント
export default function RodsApi(
  req: NextApiRequest,
  res: NextApiResponse<RodsListApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
