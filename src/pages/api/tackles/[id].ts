import type { NextApiRequest, NextApiResponse } from 'next'

export type Tackle = {
  ID: string
  CreatedAt: string
  Rod: {
    ID: string
    name: string
    imageUrl: string
    imageAlt: string
    length: string
    RodHardnessCondition: { typeName: string }
    companyName: string
    CreatedAt: string
    RodImage: {
      ID: string
      image_file: string
    }
  },
  Reel: {
    ID: string
    name: string
    imageUrl: string
    imageAlt: string
    TypeNumberCondition: { typeName: string }
    GearCondition: { typeName: string }
    companyName: string
    CreatedAt: string
    ReelImage: {
      ID: string
      image_file: string
    }
  },
  Line: {
    ID: string
    name: string
    imageUrl: string
    imageAlt: string
    thickness: string
    lineType: string
    companyName: string
    CreatedAt: string
    LineImage: {
      ID: string
      image_file: string
    }
  }
}

// API のレスポンス型
export type TacklesApiResponse = {
  result?: Tackle
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
