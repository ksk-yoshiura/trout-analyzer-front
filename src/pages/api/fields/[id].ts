import type { NextApiRequest, NextApiResponse } from 'next'

export type Field = {
  id: string
  imageUrl: string
  imageAlt: string
  createdAt: string
  lastVisitedAt: string
  name: string
  address: string
  frequency: string
}

// API のレスポンス型
export type FieldsApiResponse = {
  field?: Field
  debugMessage?: string
}

// API のエントリポイント
export default function FieldsApi(
  req: NextApiRequest,
  res: NextApiResponse<FieldsApiResponse>
): void {
  const id = req.query.id as string
  const field = fetchFieldData(id)
  if (field) {
    res.status(200).json({ field })
  } else {
    res.status(400).json({ debugMessage: `Field [id=${id}] not found` })
  }
}

// 擬似的なデータフェッチ関数
function fetchFieldData(id: string): Field | undefined {
  const fields: Field[] = [
    {
      id: '1',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      lastVisitedAt: '2021/12/28',
      name: 'super good fishing park',
      address: 'shiga prefecture',
      frequency: '5'
    },
  ]
  return fields.find((field) => field.id === id)
}