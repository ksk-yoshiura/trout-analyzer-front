import type { NextApiRequest, NextApiResponse } from 'next'

export type LureType = {
  ID: string
  typeName: string
}

// API のレスポンス型
export type LureTypesApiResponse = {
  result?: LureType[]
  status: number
  message?: string
}

// API のエントリポイント
export default function LureTypesApi(
  req: NextApiRequest,
  res: NextApiResponse<LureTypesApiResponse>
): void {
  // const lure_types = fetchLureTypeData()
  // if (lure_types) {
  //   res.status(200).json({ lure_types })
  // } else {
  //   res.status(400).json({ debugMessage: `LureType not found` })
  // }
}

// 擬似的なデータフェッチ関数
// function fetchLureTypeData(): LureType[] | undefined {
//   const lure_types: LureType[] = [
//     {
//       id: '1',
//       type_name: 'spoon'
//     },
//     {
//       id: '2',
//       type_name: 'minor'
//     },
//     {
//       id: '3',
//       type_name: 'crank bait'
//     },
//     {
//       id: '4',
//       type_name: 'viberation'
//     }
//   ]
//   return lure_types
// }