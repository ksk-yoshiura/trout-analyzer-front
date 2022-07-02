import type { NextApiRequest, NextApiResponse } from 'next'

export type PatternCondition = {
  ID: string
  typeName: string
  typeNum: string
}

// API のレスポンス型
export type PatternConditionsApiResponse = {
  result: PatternCondition[]
  status: number
  message?: string
}

// API のエントリポイント
export default function PatternConditionApi(
  req: NextApiRequest,
  res: NextApiResponse<PatternConditionsApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}