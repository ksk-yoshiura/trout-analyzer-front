import type { NextApiRequest, NextApiResponse } from 'next'

export type Pattern = {
  ID: string
  CreatedAt: string
  // バッジ情報
  // 釣果
  ResultCondition: {
    typeName: string
  },
  SpeedCondition: {
    typeName: string
  },
  DepthCondition: {
    typeName: string
  },
  WeatherCondition: {
    typeName: string
  },
  // ルアー情報
  Lure: {
    ID: string
    LureType: {
      typeName: string
    }
    name: string
    companyName: string
    color: string
    weight: string
  },
}

// API のレスポンス型
export type PatternsApiResponse = {
  result?: Pattern[]
  status: number
  message?: string
}

// API のエントリポイント
export default function PatternsApi(
  req: NextApiRequest,
  res: NextApiResponse<PatternsApiResponse>
): void {
  // const patterns = fetchPatternData()
  // if (patterns) {
  //   res.status(200).json({ patterns })
  // } else {
  //   res.status(400).json({ debugMessage: `Patterns not found` })
  // }
}

// 擬似的なデータフェッチ関数
// function fetchPatternData(): Pattern[] | undefined {
//   const patterns: Pattern[] = [
//     {
//       id: '1',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '2',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '3',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '4',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '5',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '6',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '7',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '8',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '9',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '10',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '11',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '12',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     },
//     {
//       id: '13',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '11:30',
//       result: 'caught',
//       lureType: 'spoon',
//       weather: 'sunny',
//       depth: 'shallow',
//       speed: 'fast'
//     }
//   ]
//   return patterns
// }