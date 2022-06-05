import type { NextApiRequest, NextApiResponse } from 'next'

type LureType = {
  ID: string
  typeName: string
}

export type Lure = {
  ID: string
  CreatedAt: string
  LureType: LureType
  name: string
  LureImage: {
    ID: string  
    image_file: string
  }
}

// API のレスポンス型
export type LuresApiResponse = {
  result?: Lure[]
  status: number
  message?: string
}

// API のエントリポイント
export default function LuresApi(
  req: NextApiRequest,
  res: NextApiResponse<LuresApiResponse>
): void {
  // const lures = fetchLureData()
  // if (lures) {
  //   res.status(200).json({ lures })
  // } else {
  //   res.status(400).json({ debugMessage: `Lures not found` })
  // }
}

// 擬似的なデータフェッチ関数
// function fetchLureData(): Lure[] | undefined {
//   const lures: Lure[] = [
//     {
//       id: '1',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '2',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '3',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '4',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '5',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '6',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '7',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '8',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '9',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '10',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '11',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '12',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     },
//     {
//       id: '13',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lureType: 'spoon',
//       name: 'super crank bait'
//     }
//   ]
//   return lures
// }