import type { NextApiRequest, NextApiResponse } from 'next'

// API のレスポンス型
export type LoginApiResponse = {
  debugMessage?: string
}

// API のエントリポイント
export default function LoginApi(
  req: NextApiRequest,
  res: NextApiResponse<LoginApiResponse>
): void {
  if (req.method === "POST") {
    console.log(req.body)
    res.status(200).json(req.body)
  } else {
    res.status(400).json({ debugMessage: `User not found` })
  }
}