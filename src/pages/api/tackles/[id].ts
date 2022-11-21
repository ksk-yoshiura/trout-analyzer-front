import type { NextApiRequest, NextApiResponse } from 'next'

import type { Tackle } from '../../../types/tackle'

// API のレスポンス型
export type TacklesApiResponse = {
  result?: Tackle
  status: number
  message?: string
}

// API のエントリポイント
export default function TacklesApi(
  req: NextApiRequest,
  res: NextApiResponse<TacklesApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
