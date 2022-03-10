import type { NextApiRequest, NextApiResponse } from 'next'

export type Reel = {
  id: string
  imageUrl: string
  imageAlt: string
  createdAt: string
  type: string
  gear: string
  name: string
}

// API のレスポンス型
export type ReelsApiResponse = {
  result?: Reel[]
  status: number
  message?: string
}

// API のエントリポイント
export default function ReelsApi(
  req: NextApiRequest,
  res: NextApiResponse<ReelsApiResponse>
): void {
  // const reels = fetchReelData()
  // if (reels) {
  //   res.status(200).json({ reels })
  // } else {
  //   res.status(400).json({ debugMessage: `Reels not found` })
  // }
}

// 擬似的なデータフェッチ関数
function fetchReelData(): Reel[] | undefined {
  const reels: Reel[] = [
    {
      id: '1',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '2',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '3',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '4',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '5',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '6',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '7',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '8',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '9',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '10',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '11',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '12',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    },
    {
      id: '13',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      type: '3000',
      gear: 'high',
      name: 'super good reel'
    }
  ]
  return reels
}