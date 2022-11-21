import type { NextApiRequest, NextApiResponse } from 'next'

import type { Rod } from '../../../types/rod'

// API のレスポンス型
export type RodsApiResponse = {
  result: Rod[]
  status: number
  message?: string
}

// API のエントリポイント
export default function RodsApi(
  req: NextApiRequest,
  res: NextApiResponse<RodsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
