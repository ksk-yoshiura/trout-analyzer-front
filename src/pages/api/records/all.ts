import type { NextApiRequest, NextApiResponse } from 'next'

export type Record = {
  id: string
  imageUrl: string
  imageAlt: string
  createdAt: string
  visitedAt: string
  caughtSum: string
  name: string
}

// API のレスポンス型
export type RecordsApiResponse = {
  result?: Record[]
  status: number
  message?: string
}

// API のエントリポイント
export default function RecordsApi(
  req: NextApiRequest,
  res: NextApiResponse<RecordsApiResponse>
): void {
  // const records = fetchRecordData()
  // if (records) {
  //   res.status(200).json({ records })
  // } else {
  //   res.status(400).json({ debugMessage: `Records not found` })
  // }
}

// 擬似的なデータフェッチ関数
function fetchRecordData(): Record[] | undefined {
  const records: Record[] = [
    {
      id: '1',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '2',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '3',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '4',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '5',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '6',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '7',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '8',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '9',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '10',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '11',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '12',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    },
    {
      id: '13',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      visitedAt: '2022/01/02',
      caughtSum: '150',
      createdAt: '2021/12/28',
      name: 'super great pond'
    }
  ]
  return records
}