import type { NextApiRequest, NextApiResponse } from 'next'

export type Field = {
  ID: string
  imageUrl: string
  imageAlt: string
  CreatedAt: string
  lastVisitedAt: string
  name: string
  address: string
  frequency: string
}

// API のレスポンス型
export type FieldsApiResponse = {
  result?: Field[]
  status: number
  message?: string
}

// API のエントリポイント
export default function FieldsApi(
  req: NextApiRequest,
  res: NextApiResponse<FieldsApiResponse>
): void {
  // const fields = fetchFieldData()
}

// 擬似的なデータフェッチ関数
function fetchFieldData(): Field[] | undefined {
  const fields: Field[] = [
    {
      ID: '1',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      CreatedAt: '2021/12/28',
      lastVisitedAt: '2021/12/28',
      name: 'super good fishing park',
      address: 'shiga prefecture',
      frequency: '5'
    },
  ]
  return fields
}