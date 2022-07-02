import type { NextApiRequest, NextApiResponse } from 'next'

export type ToolCondition = {
  id: string
  type_num: string
  type_name: string
}

// API のレスポンス型
export type ToolConditionApiResponse = {
  tool_condition?: ToolCondition
  debugMessage?: string
}

// API のエントリポイント
export default function ToolConditionApi(
  req: NextApiRequest,
  res: NextApiResponse<ToolConditionApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
