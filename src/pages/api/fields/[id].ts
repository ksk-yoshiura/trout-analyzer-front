import type { NextApiRequest, NextApiResponse } from 'next'

import type { FieldBasic, FieldDetail, FieldImage } from '../../../types/field'

// API のレスポンス型
export type FieldsDetailApiResponse = {
  result?: FieldDetail<FieldBasic, FieldImage>
  status: number
  message?: string
}

// API のエントリポイント
export default function FieldsApi(
  req: NextApiRequest,
  res: NextApiResponse<FieldsDetailApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
