import type { NextApiRequest, NextApiResponse } from 'next'

export type Field = {
  id: string
  imageUrl: string
  imageAlt: string
  lastVisited: string
  name: string
}

// API のレスポンス型
export type FieldsApiResponse = {
  field?: Field[]
  debugMessage?: string
}

// API のエントリポイント
export default function FieldsApi(
  req: NextApiRequest,
  res: NextApiResponse<FieldsApiResponse>
): void {
  const field = fetchFieldData()
  if (field) {
    res.status(200).json({ field })
  } else {
    res.status(400).json({ debugMessage: `Fields not found` })
  }
}

// 擬似的なデータフェッチ関数
function fetchFieldData(): Field[] | undefined {
  const fields: Field[] = [
    {
      id: '1',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '2',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '3',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '4',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '5',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '6',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '7',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '8',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '9',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '10',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '11',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '12',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    },
    {
      id: '13',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'fields image',
      lastVisited: '2021/12/28',
      name: 'super good fishing park'
    }
  ]
  return fields
}