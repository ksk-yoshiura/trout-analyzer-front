import type { NextApiRequest, NextApiResponse } from 'next'

export type Color = {
  ID: string
  code: string
  name: string
}

// API のレスポンス型
export type ColorsApiResponse = {
  result?: Color[]
  status: number
  message?: string
}

// API のエントリポイント
export default function ColorsApi(
  req: NextApiRequest,
  res: NextApiResponse<ColorsApiResponse>
): void {
  // const Colors = fetchColorData()
}