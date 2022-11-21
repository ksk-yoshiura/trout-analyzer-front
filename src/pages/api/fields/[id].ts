import type { NextApiRequest, NextApiResponse } from 'next'

import type { Field } from '../../../types/field'

// API のレスポンス型
export type FieldsApiResponse = {
  result?: Field
  status: number
  message?: string
}

// API のエントリポイント
export default function FieldsApi(
  req: NextApiRequest,
  res: NextApiResponse<FieldsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
