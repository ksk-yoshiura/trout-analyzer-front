import type { NextApiRequest, NextApiResponse } from 'next'

export type Line = {
  ID: string
  CreatedAt: string
  lineType: string
  name: string
  thickness: string
  LineCondition: {
    typeName: string
  }
  LineImage: {
    ID: string  
    image_file: string
  }
}

// API のレスポンス型
export type LinesApiResponse = {
  result?: Line[]
  status: number
  message?: string
}

// API のエントリポイント
export default function LinesApi(
  req: NextApiRequest,
  res: NextApiResponse<LinesApiResponse>
): void {
  // const lines = fetchLineData()
  // if (lines) {
  //   res.status(200).json({ lines })
  // } else {
  //   res.status(400).json({ debugMessage: `Lines not found` })
  // }
}

// 擬似的なデータフェッチ関数
// function fetchLineData(): Line[] | undefined {
//   const lines: Line[] = [
//     {
//       id: '1',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '2',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '3',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '4',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '5',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '6',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '7',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '8',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '9',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '10',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '11',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '12',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     },
//     {
//       id: '13',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'line image',
//       createdAt: '2021/12/28',
//       lineType: 'nylon',
//       name: 'super good nylon',
//       thickness: '3'
//     }
//   ]
//   return lines
// }