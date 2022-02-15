import type { NextApiRequest, NextApiResponse } from 'next'

// API のレスポンス型
export type LuresApiResponse = {
  debugMessage?: string
}

// API のエントリポイント
export default function LureCreateApi(
  req: NextApiRequest,
  res: NextApiResponse<LuresApiResponse>
): void {
  if (req.method === "POST") {
    res.status(200).json(req.body)
  } else {
    res.status(400).json({ debugMessage: `Lure not found` })
  }
}