import type { NextApiRequest, NextApiResponse } from 'next'

// API のレスポンス型
export type RodsApiResponse = {
  debugMessage?: string
}

// API のエントリポイント
export default function RodCreateApi(
  req: NextApiRequest,
  res: NextApiResponse<RodsApiResponse>
): void {
  if (req.method === "POST") {
    res.status(200).json(req.body)
  } else {
    res.status(400).json({ debugMessage: `Rod not found` })
  }
}