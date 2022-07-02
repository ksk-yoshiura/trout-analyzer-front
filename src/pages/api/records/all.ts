import type { NextApiRequest, NextApiResponse } from 'next'

export type Record = {
  ID: string
  CreatedAt: string
  Field: {
    ID: string
    CreatedAt: string
    name: string

    FieldImage: {
      ID: string
      image_file: string
    }
  }
}

// API のレスポンス型
export type RecordsApiResponse = {
  result?: Record[]
  status: number
  message?: string
}

// API のエントリポイント
export default function RecordsApi(
  req: NextApiRequest,
  res: NextApiResponse<RecordsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
