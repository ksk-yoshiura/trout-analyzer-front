import type { NextApiRequest, NextApiResponse } from 'next'

export type LureType = {
  id: string
  type_name: string
}

// API のレスポンス型
export type LureTypesApiResponse = {
  lure_type?: LureType
  debugMessage?: string
}

// API のエントリポイント
export default function LureTypesApi(
  req: NextApiRequest,
  res: NextApiResponse<LureTypesApiResponse>
): void {
  const id = req.query.id as string
  const lure_type = fetchLureTypeData(id)
  if (lure_type) {
    res.status(200).json({ lure_type })
  } else {
    res.status(400).json({ debugMessage: `LureType [id=${id}] not found` })
  }
}

// 擬似的なデータフェッチ関数
function fetchLureTypeData(id: string): LureType | undefined {
  const lure_types: LureType[] = [
    {
      id: '1',
      type_name: 'spoon'
    },
    {
      id: '2',
      type_name: 'minor'
    },
    {
      id: '3',
      type_name: 'crank bait'
    },
    {
      id: '4',
      type_name: 'viberation'
    }
  ]
  return lure_types.find((lure_types) => lure_types.id === id)
}