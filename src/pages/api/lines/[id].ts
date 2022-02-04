import type { NextApiRequest, NextApiResponse } from 'next'

export type Line = {
  id: string
  imageUrl: string
  imageAlt: string
  createdAt: string
  lastUsedAt: string
  lineType: string
  name: string
  company: string
  thickness: string
}

// API のレスポンス型
export type LinesApiResponse = {
  line?: Line
  debugMessage?: string
}

// API のエントリポイント
export default function LinesApi(
  req: NextApiRequest,
  res: NextApiResponse<LinesApiResponse>
): void {
  const id = req.query.id as string
  const line = fetchLineData(id)
  if (line) {
    res.status(200).json({ line })
  } else {
    res.status(400).json({ debugMessage: `Line [id=${id}] not found` })
  }
}

// 擬似的なデータフェッチ関数
function fetchLineData(id: string): Line | undefined {
  const lines: Line[] = [
    {
      id: '1',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      lastUsedAt: '2021/12/28',
      lineType: 'nylon',
      name: 'super good nylon',
      company: 'DAIWA',
      thickness: '3'
    },
  ]
  return lines.find((line) => line.id === id)
}