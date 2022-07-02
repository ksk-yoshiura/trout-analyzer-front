import type { NextApiRequest, NextApiResponse } from 'next'

export type LureType = {
  ID: string
  typeName: string
}

// API のレスポンス型
export type LureTypesApiResponse = {
  result?: LureType[]
  status: number
  message?: string
}

// API のエントリポイント
export default function LureTypesApi(
  req: NextApiRequest,
  res: NextApiResponse<LureTypesApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}