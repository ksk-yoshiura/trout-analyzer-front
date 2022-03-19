import type { NextApiRequest, NextApiResponse } from 'next'

export type Tackle = {
  ID: string
  CreatedAt: string
  Rod: {
    name: string
    imageUrl: string
    imageAlt: string
    length: string
    RodHardnessCondition: { typeName: string }
  },
  Reel: {
    name: string
    imageUrl: string
    imageAlt: string
    TypeNumberCondition: { typeName: string }
    GearCondition: { typeName: string }
  },
  Line: {
    name: string
    imageUrl: string
    imageAlt: string
    thickness: string
    lineType: string
  }
}

// API のレスポンス型
export type TacklesApiResponse = {
  result?: Tackle[]
  status: number
  message?: string
}

// API のエントリポイント
export default function TacklesApi(
  req: NextApiRequest,
  res: NextApiResponse<TacklesApiResponse>
): void {
  // const tackles = fetchTackleData()
  // if (tackles) {
  //   res.status(200).json({ tackles })
  // } else {
  //   res.status(400).json({ debugMessage: `Tackle not found` })
  // }
}

// 擬似的なデータフェッチ関数
// function fetchTackleData(): Tackle[] | undefined {
//   const tackles: Tackle[] = [
//     {
//       id: '1',
//       createdAt: '2021/12/28',
//       rod: {
//         name: 'super good rod',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: 'rod image',
//         length: '6',
//         hardness: 'ML'
//       },
//       reel: {
//         name: 'super great reel',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         type: '2000',
//         gear: 'HG'
//       },
//       line: {
//         name: 'good line',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         thickness: '3'
//       }
//     },
//     {
//       id: '2',
//       createdAt: '2021/12/28',
//       rod: {
//         name: 'super good rod',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: 'rod image',
//         length: '6',
//         hardness: 'ML'
//       },
//       reel: {
//         name: 'super great reel',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         type: '2000',
//         gear: 'HG'
//       },
//       line: {
//         name: 'good line',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         thickness: '3'
//       }
//     },
//     {
//       id: '3',
//       createdAt: '2021/12/28',
//       rod: {
//         name: 'super good rod',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: 'rod image',
//         length: '6',
//         hardness: 'ML'
//       },
//       reel: {
//         name: 'super great reel',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         type: '2000',
//         gear: 'HG'
//       },
//       line: {
//         name: 'good line',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         thickness: '3'
//       }
//     },
//     {
//       id: '4',
//       createdAt: '2021/12/28',
//       rod: {
//         name: 'super good rod',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: 'rod image',
//         length: '6',
//         hardness: 'ML'
//       },
//       reel: {
//         name: 'super great reel',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         type: '2000',
//         gear: 'HG'
//       },
//       line: {
//         name: 'good line',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         thickness: '3'
//       }
//     },
//     {
//       id: '5',
//       createdAt: '2021/12/28',
//       rod: {
//         name: 'super good rod',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: 'rod image',
//         length: '6',
//         hardness: 'ML'
//       },
//       reel: {
//         name: 'super great reel',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         type: '2000',
//         gear: 'HG'
//       },
//       line: {
//         name: 'good line',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         thickness: '3'
//       }
//     },
//     {
//       id: '6',
//       createdAt: '2021/12/28',
//       rod: {
//         name: 'super good rod',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: 'rod image',
//         length: '6',
//         hardness: 'ML'
//       },
//       reel: {
//         name: 'super great reel',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         type: '2000',
//         gear: 'HG'
//       },
//       line: {
//         name: 'good line',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         thickness: '3'
//       }
//     },
//     {
//       id: '7',
//       createdAt: '2021/12/28',
//       rod: {
//         name: 'super good rod',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: 'rod image',
//         length: '6',
//         hardness: 'ML'
//       },
//       reel: {
//         name: 'super great reel',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         type: '2000',
//         gear: 'HG'
//       },
//       line: {
//         name: 'good line',
//         imageUrl: 'https://bit.ly/2Z4KKcF',
//         imageAlt: '',
//         thickness: '3'
//       }
//     }
//   ]
//   return tackles
// }