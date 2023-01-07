import type { NextApiRequest, NextApiResponse } from 'next'

import type { Color } from '../../../../types/color'
import type { LureImage, LuresListByType } from '../../../../types/lure'

// API のレスポンス型
export type LuresListByTypeApiResponse = {
  result?: LuresListByType<Color, LureImage>[]
  status: number
  message?: string
}

// API のエントリポイント
export default function LuresApi(
  req: NextApiRequest,
  res: NextApiResponse<LuresListByTypeApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}