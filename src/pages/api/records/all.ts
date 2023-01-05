import type { NextApiRequest, NextApiResponse } from 'next'

import type { FieldImage, FieldsList } from '../../../types/field'
import type { RecordsAllList } from '../../../types/record'

// API のレスポンス型
export type RecordsApiResponse = {
  result?: RecordsAllList<FieldsList<FieldImage>>[]
  status: number
  message?: string
}

// API のエントリポイント
export default function RecordsApi(
  req: NextApiRequest,
  res: NextApiResponse<RecordsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
