import type { NextApiRequest, NextApiResponse } from 'next'

export type Rod = {
  id: string
  imageUrl: string
  imageAlt: string
  createdAt: string
  hardness: string
  length: string
  name: string
  company: string
}

// API のレスポンス型
export type RodsApiResponse = {
  result?: Rod
  status: number
  message?: string
}

// API のエントリポイント
export default function RodsApi(
  req: NextApiRequest,
  res: NextApiResponse<RodsApiResponse>
): void {
  // const id = req.query.id as string
  // // 空データ（タイプチェック用）
  // const vacantData: Rod = {
  //   'id': '',
  //   'imageUrl': '',
  //   'imageAlt': '',
  //   'createdAt': '',
  //   'hardness': '',
  //   'length': '',
  //   'name': '',
  //   'company': '',
  // }

  // // cretaeとeditで同じフォームを使いまわしているため、
  // // idが存在しない場合undefinedになる
  // // これとは別にeditやdetailでもid取得のラグでbad requestエラーが出ていたので
  // // 下記記述で回避する
  // const rod = id !== 'undefined' && id !== '0' ? fetchRodData(id) : vacantData
  // if (rod) {
  //   res.status(200).json({ rod })
  // } else {
  //   res.status(400).json({ debugMessage: `Rod [id=${id}] not found` })
  // }
}

// 擬似的なデータフェッチ関数
function fetchRodData(id: string): Rod | undefined {
  const rods: Rod[] = [
    {
      id: '1',
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'rod image',
    createdAt: '2021/12/28',
    hardness: '1',
    length: '6',
    name: 'super good fishing rod',
    company: 'no brand'
    },
  ]
  return rods.find((rod) => rod.id === id)
}