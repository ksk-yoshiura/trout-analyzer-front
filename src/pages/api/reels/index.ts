import type { NextApiRequest, NextApiResponse } from 'next'

export type Reel = {
  ID: string
  CreatedAt: string
  type: string
  gear: string
  name: string
  TypeNumberCondition: { typeName: string }
  GearCondition: { typeName: string }
  ReelImage: {
    ID: string
    image_file: string
  }
}

// API のレスポンス型
export type ReelsApiResponse = {
  result?: Reel[]
  status: number
  message?: string
}

// API のエントリポイント
export default function ReelsApi(
  req: NextApiRequest,
  res: NextApiResponse<ReelsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
