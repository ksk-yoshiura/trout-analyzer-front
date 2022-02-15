import type { NextApiRequest, NextApiResponse } from 'next'

// API のレスポンス型
export type LinesApiResponse = {
  debugMessage?: string
}

// API のエントリポイント
export default function LineCreateApi(
  req: NextApiRequest,
  res: NextApiResponse<LinesApiResponse>
): void {
  if (req.method === "POST") {
    res.status(200).json(req.body)
  } else {
    res.status(400).json({ debugMessage: `Line not found` })
  }
}