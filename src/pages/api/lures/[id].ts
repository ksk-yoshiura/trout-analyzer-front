import type { NextApiRequest, NextApiResponse } from 'next'

import type { Color } from '../../../types/color'
import type { LureDetail, LureImage } from '../../../types/lure'
import type { LureType } from '../../../types/lure_type'

// API のレスポンス型
export type LureDetailApiResponse = {
  result?: LureDetail<LureType, LureImage, Color>
  status: number
  message?: string
}

// API のエントリポイント
export default function LuresApi(
  req: NextApiRequest,
  res: NextApiResponse<LureDetailApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
