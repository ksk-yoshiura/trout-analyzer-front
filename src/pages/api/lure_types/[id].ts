import type { NextApiRequest, NextApiResponse } from 'next'

import type { LureType } from '../../../types/lure_type'

// API のレスポンス型
export type LureTypesApiResponse = {
  lure_type?: LureType
  debugMessage?: string
}

// API のエントリポイント
export default function LureTypesApi(
  req: NextApiRequest,
  res: NextApiResponse<LureTypesApiResponse>
): void {

  if (req.body) {
    res.status(200).json(req.body)
  }
}