import type { NextApiRequest, NextApiResponse } from 'next'

// API のレスポンス型
export type ReelsApiResponse = {
  debugMessage?: string
}

// API のエントリポイント
export default function ReelCreateApi(
  req: NextApiRequest,
  res: NextApiResponse<ReelsApiResponse>
): void {
  if (req.method === "POST") {
    res.status(200).json(req.body)
  } else {
    res.status(400).json({ debugMessage: `Reel not found` })
  }
}