import type { NextApiRequest, NextApiResponse } from 'next'

export type ToolCondition = {
  ID: string
  typeNum: string
  typeName: string
}

// API のレスポンス型
export type ToolConditionApiResponse = {
  result?: ToolCondition[]
  status: number
  message?: string
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
