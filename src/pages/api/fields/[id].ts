import type { NextApiRequest, NextApiResponse } from 'next'

export type Field = {
  ID: string
  imageUrl: string
  imageAlt: string
  CreatedAt: string
  lastVisitedAt: string
  name: string
  address: string
  frequency: string
  FieldImage: {
    ID: string
    CreatedAt: string
    field_id: number
    image_file: string
  }
}

// API のレスポンス型
export type FieldsApiResponse = {
  result?: Field
  status: number
  message?: string
}

// API のエントリポイント
export default function FieldsApi(
  req: NextApiRequest,
  res: NextApiResponse<FieldsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
