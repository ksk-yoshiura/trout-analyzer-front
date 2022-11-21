import type { NextApiRequest, NextApiResponse } from 'next'

import type { Color } from '../../../types/color'

// API のレスポンス型
export type ColorsApiResponse = {
  result?: Color[]
  status: number
  message?: string
}

// API のエントリポイント
export default function ColorsApi(
  req: NextApiRequest,
  res: NextApiResponse<ColorsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}