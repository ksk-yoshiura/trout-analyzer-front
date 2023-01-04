import type { NextApiRequest, NextApiResponse } from 'next'

import type { GearCondition, ReelBasic, ReelImage, ReelsList } from '../../../types/reel'

// API のレスポンス型
export type ReelsApiResponse = {
  result?: ReelsList<ReelBasic, ReelImage, GearCondition>[]
  status: number
  message?: string
}

// API のエントリポイント
export default function ReelsApi(
  req: NextApiRequest,
  res: NextApiResponse<ReelsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
