import type { NextApiRequest, NextApiResponse } from 'next'

// API のレスポンス型
export type PatternsApiResponse = {
  debugMessage?: string
}

// API のエントリポイント
export default function PatternDeleteApi(
  req: NextApiRequest,
  res: NextApiResponse<PatternsApiResponse>
): void {
  if (req.method === "DELETE") {
    res.status(200).json(req.body)
  } else {
    res.status(400).json({ debugMessage: `Pattern not found` })
  }
}