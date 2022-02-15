import type { NextApiRequest, NextApiResponse } from 'next'

// API のレスポンス型
export type FieldsApiResponse = {
  debugMessage?: string
}

// API のエントリポイント
export default function FieldCreateApi(
  req: NextApiRequest,
  res: NextApiResponse<FieldsApiResponse>
): void {
  if (req.method === "POST") {
    res.status(200).json(req.body)
  } else {
    res.status(400).json({ debugMessage: `Field not found` })
  }
}