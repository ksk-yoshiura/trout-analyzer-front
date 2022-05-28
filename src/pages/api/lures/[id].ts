import type { NextApiRequest, NextApiResponse } from 'next'

type LureType = {
  ID: string
  typeName: string
}

export type Lure = {
  id: string
  imageUrl: string
  imageAlt: string
  CreatedAt: string
  lastUsedAt: string
  LureType: LureType
  name: string
  companyName: string
  color: string
  weight: string
  frequency: string
  LureImage: {
    ID: String
    CreatedAt: string
    lure_id: number
    image_file: string
  }
}

// API のレスポンス型
export type LuresApiResponse = {
  result?: Lure
  status: number
  message?: string
}

// API のエントリポイント
export default function LuresApi(
  req: NextApiRequest,
  res: NextApiResponse<LuresApiResponse>
): void {
  // // ID取得
  // const id = req.query.id as string
  // // 空データ（タイプチェック用）
  // const vacantData: Lure = {
  //   'id': '',
  //   'imageUrl': '',
  //   'imageAlt': '',
  //   'createdAt': '',
  //   'lastUsedAt': '',
  //   'lureType': '',
  //   'name': '',
  //   'company': '',
  //   'color': '',
  //   'weight': '',
  //   'frequency': ''
  // } 

  // // cretaeとeditで同じフォームを使いまわしているため、
  // // idが存在しない場合undefinedになる
  // // これとは別にeditやdetailでもid取得のラグでbad requestエラーが出ていたので
  // // 下記記述で回避する
  // const lure = id !== 'undefined'? fetchLureData(id): vacantData
  // if (lure) {
  //   res.status(200).json({ lure })
  // } else {
  //   res.status(400).json({ debugMessage: `Lure [id=${id}] not found` })
  // }
}

// 擬似的なデータフェッチ関数
// function fetchLureData(id: string): Lure | undefined {
//   const lures: Lure[] = [
//     {
//       id: '1',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       lastUsedAt: '2021/12/28',
//       lureType: '3',
//       name: 'super crank bait',
//       company: 'no brand',
//       color: 'red',
//       weight: '2',
//       frequency: '5'
//     },
//   ]
//   return lures.find((lure) => lure.id === id)
// }