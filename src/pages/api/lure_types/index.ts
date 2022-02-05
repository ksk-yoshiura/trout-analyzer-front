import type { NextApiRequest, NextApiResponse } from 'next'

export type LureType = {
  id: string
  type_name: string
}

// API のレスポンス型
export type LureTypesApiResponse = {
  lure_type?: LureType[]
  debugMessage?: string
}

// API のエントリポイント
export default function LureTypesApi(
  req: NextApiRequest,
  res: NextApiResponse<LureTypesApiResponse>
): void {
  const lure_type = fetchLureTypeData()
  if (lure_type) {
    res.status(200).json({ lure_type })
  } else {
    res.status(400).json({ debugMessage: `LureType not found` })
  }
}

// 擬似的なデータフェッチ関数
function fetchLureTypeData(): LureType[] | undefined {
  const lure_types: LureType[] = [
    {
      id: '1',
      type_name: 'super good fishing park'
    },
    {
      id: '2',
      type_name: 'super good fishing park'
    },
    {
      id: '3',
      type_name: 'super good fishing park'
    },
    {
      id: '4',
      type_name: 'super good fishing park'
    },
    {
      id: '5',
      type_name: 'super good fishing park'
    },
    {
      id: '6',
      type_name: 'super good fishing park'
    },
    {
      id: '7',
      type_name: 'super good fishing park'
    },
    {
      id: '8',
      type_name: 'super good fishing park'
    },
    {
      id: '9',
      type_name: 'super good fishing park'
    },
    {
      id: '10',
      type_name: 'super good fishing park'
    }
  ]
  return lure_types
}