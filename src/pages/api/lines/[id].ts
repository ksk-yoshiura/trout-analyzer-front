import type { NextApiRequest, NextApiResponse } from 'next'

import type { LineCondition, LineDetail, LineImage } from '../../../types/line'

// API のレスポンス型
export type LineDetailApiResponse = {
  result?: LineDetail<LineImage, LineCondition>
  status: number
  message?: string
}

// API のエントリポイント
export default function LinesApi(
  req: NextApiRequest,
  res: NextApiResponse<LineDetailApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
