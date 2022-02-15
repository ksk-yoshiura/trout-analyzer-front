import type { NextApiRequest, NextApiResponse } from 'next'

// API のレスポンス型
export type TacklesApiResponse = {
  debugMessage?: string
}

// API のエントリポイント
export default function TackleEditApi(
  req: NextApiRequest,
  res: NextApiResponse<TacklesApiResponse>
): void {
  if (req.method === "PUT") {
    res.status(200).json(req.body)
  } else {
    res.status(400).json({ debugMessage: `Tackle not found` })
  }
}