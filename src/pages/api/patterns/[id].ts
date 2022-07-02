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
  // タックル
  Tackle: {
    ID: string
    // ロッド
    Rod: {
      ID: string
      name: string
      hardness: string
      length: string
      companyName: string
      RodHardnessCondition: {
        typeName: string
      }
    },
    // リール
    Reel: {
      ID: string
      name: string
      gear: string
      companyName: string
      TypeNumberCondition: {
        typeName: string
      }
      GearCondition: {
        typeName: string
      }
    },
    // ライン
    Line: {
      ID: string
      name: string
      thickness: string
      companyName: string
      LineCondition: {
        typeName: string
      }
    }
  },
  depth: number
  lureId: number
  recordId: number
  result: number
  speed: number
  tackleId: number
  weather: number
}

// API のレスポンス型
export type PatternApiResponse = {
  result?: Pattern
  status: number
  message?: string
}

// API のエントリポイント
export default function PatternApi(
  req: NextApiRequest,
  res: NextApiResponse<PatternApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
