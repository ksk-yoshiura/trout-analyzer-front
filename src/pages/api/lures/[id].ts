import type { NextApiRequest, NextApiResponse } from 'next'

export type Lure = {
  id: string
  imageUrl: string
  imageAlt: string
  createdAt: string
  lastUsedAt: string
  lureType: string
  name: string
  company: string
  color: string
  weight: string
  frequency: string
}

// API のレスポンス型
export type LuresApiResponse = {
  lure?: Lure
  debugMessage?: string
}

// API のエントリポイント
export default function LuresApi(
  req: NextApiRequest,
  res: NextApiResponse<LuresApiResponse>
): void {
  const id = req.query.id as string
  const lure = fetchLureData(id)
  if (lure) {
    res.status(200).json({ lure })
  } else {
    res.status(400).json({ debugMessage: `Lure [id=${id}] not found` })
  }
}

// 擬似的なデータフェッチ関数
function fetchLureData(id: string): Lure | undefined {
  const lures: Lure[] = [
    {
      id: '1',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      lastUsedAt: '2021/12/28',
      lureType: 'spoon',
      name: 'super crank bait',
      company: 'no brand',
      color: 'red',
      weight: '2',
      frequency: '5'
    },
  ]
  return lures.find((lure) => lure.id === id)
}