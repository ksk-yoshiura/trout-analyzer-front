import type { NextApiRequest, NextApiResponse } from 'next'

export type Lure = {
  ID: string
  lureType: string
  name: string
  weight: string
  Color: {
    ID: string
    name: string
    code: string
  }
  LureImage: {
    ID: string
    image_file: string
  }
}

// API のレスポンス型
export type LuresApiResponse = {
  result?: Lure[]
  status: number
  message?: string
}

// API のエントリポイント
export default function LuresApi(
  req: NextApiRequest,
  res: NextApiResponse<LuresApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}