import type { NextApiRequest, NextApiResponse } from 'next'

// API のレスポンス型
export type SignUpApiResponse = {
  debugMessage?: string
}

// API のエントリポイント
export default function SignUpApi(
  req: NextApiRequest,
  res: NextApiResponse<SignUpApiResponse>
): void {
  if (req.method === "POST") {
    res.status(200).json(req.body)
  } else {
    res.status(400).json({ debugMessage: `Sign up failed` })
  }
}