import type { NextApiRequest, NextApiResponse } from 'next'

export type Tackle = {
  ID: string
  CreatedAt: string
  Rod: {
    name: string
    imageUrl: string
    imageAlt: string
    length: string
    RodHardnessCondition: { typeName: string }
  },
  Reel: {
    name: string
    imageUrl: string
    imageAlt: string
    TypeNumberCondition: { typeName: string }
    GearCondition: { typeName: string }
  },
  Line: {
    name: string
    imageUrl: string
    imageAlt: string
    thickness: string
    lineType: string
    LineCondition: { typeName: string }
  }
}

// API のレスポンス型
export type TacklesApiResponse = {
  result?: Tackle[]
  status: number
  message?: string
}

// API のエントリポイント
export default function TacklesApi(
  req: NextApiRequest,
  res: NextApiResponse<TacklesApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
