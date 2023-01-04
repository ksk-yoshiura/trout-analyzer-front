import type { NextApiRequest, NextApiResponse } from 'next'

import type { LureBasic, LureImage, LuresList } from '../../../types/lure'
import type { LureType } from '../../../types/lure_type'

// API のレスポンス型
export type LuresListApiResponse = {
  result?: LuresList<LureBasic, LureType, LureImage>[]
  status: number
  message?: string
}

// API のエントリポイント
export default function LuresApi(
  req: NextApiRequest,
  res: NextApiResponse<LuresListApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
