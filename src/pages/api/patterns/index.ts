import type { NextApiRequest, NextApiResponse } from 'next'

import type { Pattern } from "../../../types/pattern"

// API のレスポンス型
export type PatternsApiResponse = {
  result?: Pattern[]
  status: number
  message?: string
}

// API のエントリポイント
export default function PatternsApi(
  req: NextApiRequest,
  res: NextApiResponse<PatternsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}