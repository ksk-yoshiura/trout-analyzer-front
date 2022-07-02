import type { NextApiRequest, NextApiResponse } from 'next'

export type Line = {
  ID: string
  imageUrl: string
  imageAlt: string
  CreatedAt: string
  LineCondition: {
    typeName: string
  }
  lineTypeId: string
  name: string
  companyName: string
  thickness: string
  LineImage: {
    ID: string
    image_file: string
  }
}

// API のレスポンス型
export type LinesApiResponse = {
  result?: Line
  status: number
  message?: string
}

// API のエントリポイント
export default function LinesApi(
  req: NextApiRequest,
  res: NextApiResponse<LinesApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
