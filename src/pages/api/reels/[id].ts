import type { NextApiRequest, NextApiResponse } from 'next'

export type Reel = {
  id: string
  imageUrl: string
  imageAlt: string
  createdAt: string
  lastUsedAt: string
  name: string
  company: string
  type: string
  gear: string
}

// API のレスポンス型
export type ReelsApiResponse = {
  reel?: Reel
  debugMessage?: string
}

// API のエントリポイント
export default function ReelsApi(
  req: NextApiRequest,
  res: NextApiResponse<ReelsApiResponse>
): void {
  const id = req.query.id as string
  const reel = fetchReelData(id)
  if (reel) {
    res.status(200).json({ reel })
  } else {
    res.status(400).json({ debugMessage: `Reel [id=${id}] not found` })
  }
}

// 擬似的なデータフェッチ関数
function fetchReelData(id: string): Reel | undefined {
  const reels: Reel[] = [
    {
      id: '1',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      lastUsedAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel',
      company: 'daiawa'
    },
  ]
  return reels.find((reel) => reel.id === id)
}