import type { NextApiRequest, NextApiResponse } from 'next'

export type Rod = {
  ID: string
  CreatedAt: string
  RodHardnessCondition: { typeName: string }
  hardnessa: string
  length: string
  name: string
  RodImage: {
    ID: string
    image_file: string
  }
}

// API のレスポンス型
export type RodsApiResponse = {
  result: Rod[]
  status: number
  message?: string
}

// API のエントリポイント
export default function RodsApi(
  req: NextApiRequest,
  res: NextApiResponse<RodsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
