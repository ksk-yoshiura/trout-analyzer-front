import type { NextApiRequest, NextApiResponse } from 'next'

export type PatternCondition = {
  ID: string
  typeNum: string
  typeName: string
}

// API のレスポンス型
export type PatternConditionsApiResponse = {
  result?: PatternCondition[]
  status: number
  message?: string
}

// API のエントリポイント
export default function PatternConditionsApi(
  req: NextApiRequest,
  res: NextApiResponse<PatternConditionsApiResponse>
): void {
  // const type_num = req.query.type_num as string
  // const pattern_condition = fetchPatternConditionData(type_num)
  // if (pattern_condition) {
  //   res.status(200).json({ pattern_condition })
  // } else {
  //   res.status(400).json({ debugMessage: `PatternCondition not found` })
  // }
}

// 擬似的なデータフェッチ関数
// function fetchPatternConditionData(type_num: string): PatternCondition[] | undefined {
//   const pattern_conditions: PatternCondition[] = [
//     {
//       id: '1',
//       type_num: '1',
//       type_name: 'caught'
//     },
//     {
//       id: '2',
//       type_num: '1',
//       type_name: 'bite'
//     },
//     {
//       id: '3',
//       type_num: '1',
//       type_name: 'chased'
//     },
//     {
//       id: '4',
//       type_num: '2',
//       type_name: 'super fast'
//     },
//     {
//       id: '5',
//       type_num: '2',
//       type_name: 'fast'
//     },
//     {
//       id: '6',
//       type_num: '2',
//       type_name: 'normal'
//     },
//     {
//       id: '7',
//       type_num: '2',
//       type_name: 'slow'
//     },
//     {
//       id: '8',
//       type_num: '2',
//       type_name: 'super slow'
//     },
//     {
//       id: '9',
//       type_num: '3',
//       type_name: 'top'
//     },
//     {
//       id: '10',
//       type_num: '3',
//       type_name: 'shallow'
//     },
//     {
//       id: '11',
//       type_num: '3',
//       type_name: 'middle'
//     },
//     {
//       id: '12',
//       type_num: '3',
//       type_name: 'deep'
//     },
//     {
//       id: '13',
//       type_num: '3',
//       type_name: 'bottom'
//     },
//     {
//       id: '14',
//       type_num: '4',
//       type_name: 'sunny'
//     },
//     {
//       id: '15',
//       type_num: '4',
//       type_name: 'rainy'
//     },
//     {
//       id: '16',
//       type_num: '4',
//       type_name: 'cloudy'
//     }
//   ]
//   return pattern_conditions.filter(function(value) {return value.type_num === type_num})
// }