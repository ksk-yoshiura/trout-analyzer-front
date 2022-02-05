import type { NextApiRequest, NextApiResponse } from 'next'

export type ToolCondition = {
  id: string
  type_num: string
  type_name: string
}

// API のレスポンス型
export type ToolConditionApiResponse = {
  tool_condition?: ToolCondition
  debugMessage?: string
}

// API のエントリポイント
export default function ToolConditionApi(
  req: NextApiRequest,
  res: NextApiResponse<ToolConditionApiResponse>
): void {
  const id = req.query.id as string
  const tool_condition = fetchToolConditionData(id)
  if (tool_condition) {
    res.status(200).json({ tool_condition })
  } else {
    res.status(400).json({ debugMessage: `ToolCondition not found` })
  }
}

// 擬似的なデータフェッチ関数
function fetchToolConditionData(id: string): ToolCondition | undefined {
  const tool_conditions: ToolCondition[] = [
    {
      id: '1',
      type_num: '1',
      type_name: 'UL'
    },
    {
      id: '2',
      type_num: '1',
      type_name: 'L'
    },
    {
      id: '3',
      type_num: '1',
      type_name: 'ML'
    },
    {
      id: '4',
      type_num: '1',
      type_name: 'M'
    },
    {
      id: '5',
      type_num: '2',
      type_name: 'normal gear'
    },
    {
      id: '6',
      type_num: '2',
      type_name: 'high gear'
    },
    {
      id: '7',
      type_num: '3',
      type_name: '1000'
    },
    {
      id: '8',
      type_num: '3',
      type_name: '1500'
    },
    {
      id: '9',
      type_num: '3',
      type_name: '2000'
    },
    {
      id: '10',
      type_num: '3',
      type_name: '25000'
    },
    {
      id: '11',
      type_num: '4',
      type_name: 'fluorocarbon'
    },
    {
      id: '12',
      type_num: '4',
      type_name: 'nylon'
    },
    {
      id: '13',
      type_num: '4',
      type_name: 'PE'
    },
    {
      id: '14',
      type_num: '4',
      type_name: 'ester'
    }
  ]
  return tool_conditions.find((conditions) => conditions.id === id)
}