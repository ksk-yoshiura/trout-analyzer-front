import type { NextApiRequest, NextApiResponse } from 'next'

export type Rod = {
  id: string
  imageUrl: string
  imageAlt: string
  createdAt: string
  hardness: string
  length: string
  name: string
}

// API のレスポンス型
export type RodsApiResponse = {
  result: Rod[]
  status: number
  message?: string
}

// API のエントリポイント
export default function RodsApi(
  req: NextApiRequest,
  res: NextApiResponse<RodsApiResponse>
): void {
  // const rods = fetchRodData()
  // if (rods) {
  //   res.status(200).json({ rods })
  // } else {
  //   res.status(400).json({ debugMessage: `Rods not found` })
  // }
}

// 擬似的なデータフェッチ関数
function fetchRodData(): Rod[] | undefined {
  const rods: Rod[] = [
    {
      id: '1',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '2',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '3',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '4',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '5',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '6',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '7',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '8',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '9',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '10',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '11',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '12',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    },
    {
      id: '13',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'rod image',
      createdAt: '2021/12/28',
      hardness: 'ultra light',
      length: '6',
      name: 'super good fishing rod'
    }
  ]
  return rods
}