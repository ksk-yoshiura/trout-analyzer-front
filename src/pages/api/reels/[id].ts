import type { NextApiRequest, NextApiResponse } from 'next'

export type Reel = {
  ID: string
  imageUrl: string
  imageAlt: string
  CreatedAt: string
  name: string
  company: string
  TypeNumberCondition: { typeName: string }
  GearCondition: { typeName: string }
}

// API のレスポンス型
export type ReelsApiResponse = {
  result?: Reel
  status: number
  message?: string
}

// API のエントリポイント
export default function ReelsApi(
  req: NextApiRequest,
  res: NextApiResponse<ReelsApiResponse>
): void {
  // const id = req.query.id as string
  // // 空データ（タイプチェック用）
  // const vacantData: Reel = {
  //   'id': '',
  //   'imageUrl': '',
  //   'imageAlt': '',
  //   'createdAt': '',
  //   'name': '',
  //   'company': '',
  //   'type': '',
  //   'gear': '',
  // } 
  
  // // cretaeとeditで同じフォームを使いまわしているため、
  // // idが存在しない場合undefinedになる
  // // これとは別にeditやdetailでもid取得のラグでbad requestエラーが出ていたので
  // // 下記記述で回避する
  // const reel =  id !== 'undefined' && id !== '0'? fetchReelData(id) :vacantData
  // if (reel) {
  //   res.status(200).json({ reel })
  // } else {
  //   res.status(400).json({ debugMessage: `Reel [id=${id}] not found` })
  // }
}

// 擬似的なデータフェッチ関数
// function fetchReelData(id: string): Reel | undefined {
//   const reels: Reel[] = [
//     {
//       id: '1',
//       imageUrl: 'https://bit.ly/2Z4KKcF',
//       imageAlt: 'lure image',
//       createdAt: '2021/12/28',
//       type: '10',
//       gear: '6',
//       name: 'super good reel',
//       company: 'daiawa'
//     },
//   ]
//   return reels.find((reel) => reel.id === id)
// }