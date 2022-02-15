import type { NextApiRequest, NextApiResponse } from 'next'

// API のレスポンス型
export type RecordsApiResponse = {
  debugMessage?: string
}

// API のエントリポイント
export default function RecordEditApi(
  req: NextApiRequest,
  res: NextApiResponse<RecordsApiResponse>
): void {
  if (req.method === "PUT") {
    res.status(200).json(req.body)
  } else {
    res.status(400).json({ debugMessage: `Record not found` })
  }
}