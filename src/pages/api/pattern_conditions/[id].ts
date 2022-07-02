import type { NextApiRequest, NextApiResponse } from 'next'

export type PatternCondition = {
  id: string
  type_num: string
  type_name: string
}

// API のレスポンス型
export type PatternConditionApiResponse = {
  pattern_condition?: PatternCondition
  debugMessage?: string
}

// API のエントリポイント
export default function PatternConditionApi(
  req: NextApiRequest,
  res: NextApiResponse<PatternConditionApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
