import type { NextApiRequest, NextApiResponse } from 'next'

import type { Line } from '../../../types/line'

// API のレスポンス型
export type LinesApiResponse = {
  result?: Line
  status: number
  message?: string
}

// API のエントリポイント
export default function LinesApi(
  req: NextApiRequest,
  res: NextApiResponse<LinesApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
