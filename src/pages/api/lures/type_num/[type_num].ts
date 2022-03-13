import type { NextApiRequest, NextApiResponse } from 'next'

export type Lure = {
  id: string
  lureType: string
  name: string
  color: string
}

// API のレスポンス型
export type LuresApiResponse = {
  result?: Lure[]
  status: number
  message?: string
}

// API のエントリポイント
export default function LuresApi(
  req: NextApiRequest,
  res: NextApiResponse<LuresApiResponse>
): void {
  // const type_num = req.query.type_num as string
  // const lures = fetchLureData(type_num)
  // if (lures) {
  //   res.status(200).json({ lures })
  // } else {
  //   res.status(400).json({ debugMessage: `Lure [type_num=${type_num}] not found` })
  // }
}

// 擬似的なデータフェッチ関数
function fetchLureData(type_num: string): Lure[] | undefined {
  const lures: Lure[] = [
    {
      id: '1',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '2',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '3',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '4',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '5',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '6',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '7',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '8',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '9',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '10',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '11',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '12',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    },
    {
      id: '13',
      color: 'red',
      name: 'super crank bait',
      lureType: '1'
    }
  ]
  return lures.filter((lure) => lure.lureType === type_num)
}