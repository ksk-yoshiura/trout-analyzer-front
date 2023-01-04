import type { NextApiRequest, NextApiResponse } from 'next'

import type { GearCondition, ReelBasic, ReelDetail, ReelImage, TypeNumberCondition } from '../../../types/reel'

// API のレスポンス型
export type ReelDetailApiResponse = {
  result?: ReelDetail<ReelBasic, ReelImage, GearCondition, TypeNumberCondition>
  status: number
  message?: string
}

// API のエントリポイント
export default function ReelsApi(
  req: NextApiRequest,
  res: NextApiResponse<ReelDetailApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
