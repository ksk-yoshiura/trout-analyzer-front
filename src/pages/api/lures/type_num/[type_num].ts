import type { NextApiRequest, NextApiResponse } from 'next'

import type { Lure } from '../../../../types/lure'

// API のレスポンス型
export type LuresApiResponse = {
  result?: Lure[]
  status: number
  message?: string
}

// API のエントリポイント
export default function LuresApi(
  req: NextApiRequest,
  res: NextApiResponse<LuresApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}