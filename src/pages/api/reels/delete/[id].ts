import type { NextApiRequest, NextApiResponse } from 'next'

// API のレスポンス型
export type ReelsApiResponse = {
  debugMessage?: string
}

// API のエントリポイント
export default function ReelDeleteApi(
  req: NextApiRequest,
  res: NextApiResponse<ReelsApiResponse>
): void {
  if (req.method === "DELETE") {
    res.status(200).json(req.body)
  } else {
    res.status(400).json({ debugMessage: `Reel not found` })
  }
}