import type { NextApiRequest, NextApiResponse } from 'next'

import type { LineBasic, LineCondition, LineImage, LineList } from '../../../types/line'

// API のレスポンス型
export type LinesListApiResponse = {
  result?: LineList<LineBasic, LineImage, LineCondition>[]
  status: number
  message?: string
}

// API のエントリポイント
export default function LinesApi(
  req: NextApiRequest,
  res: NextApiResponse<LinesListApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}