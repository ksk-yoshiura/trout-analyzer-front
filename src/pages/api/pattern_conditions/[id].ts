import type { NextApiRequest, NextApiResponse } from 'next'

import type { PatternCondition } from '../../../types/pattern_condition'


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
