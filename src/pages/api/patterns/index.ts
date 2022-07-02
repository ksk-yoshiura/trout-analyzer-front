import type { NextApiRequest, NextApiResponse } from 'next'

export type Pattern = {
  ID: string
  CreatedAt: string
  // バッジ情報
  // 釣果
  ResultCondition: {
    typeName: string
  },
  SpeedCondition: {
    typeName: string
  },
  DepthCondition: {
    typeName: string
  },
  WeatherCondition: {
    typeName: string
  },
  // ルアー情報
  Lure: {
    ID: string
    LureType: {
      typeName: string
    }
    name: string
    companyName: string
    color: string
    weight: string
  },
}

// API のレスポンス型
export type PatternsApiResponse = {
  result?: Pattern[]
  status: number
  message?: string
}

// API のエントリポイント
export default function PatternsApi(
  req: NextApiRequest,
  res: NextApiResponse<PatternsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}