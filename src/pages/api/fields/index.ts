import type { NextApiRequest, NextApiResponse } from 'next'

import type { FieldImage, FieldsList } from '../../../types/field'

// API のレスポンス型
export type FieldsListApiResponse = {
  result?: FieldsList<FieldImage>[]
  status: number
  message?: string
}

// API のエントリポイント
export default function FieldsApi(
  req: NextApiRequest,
  res: NextApiResponse<FieldsListApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
