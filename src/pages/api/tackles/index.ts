import type { NextApiRequest, NextApiResponse } from 'next'

import type { LineForTackle } from '../../../types/line'
import type { ReelForTackle } from '../../../types/reel'
import type { RodForTackle } from '../../../types/rod'
import type { TacklesList } from '../../../types/tackle'

// API のレスポンス型
export type TacklesListApiResponse = {
  result?: TacklesList<RodForTackle, ReelForTackle, LineForTackle>[]
  status: number
  message?: string
}

// API のエントリポイント
export default function TacklesApi(
  req: NextApiRequest,
  res: NextApiResponse<TacklesListApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
