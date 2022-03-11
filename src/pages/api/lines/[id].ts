import type { NextApiRequest, NextApiResponse } from 'next'

export type Line = {
  id: string
  imageUrl: string
  imageAlt: string
  createdAt: string
  lineType: string
  name: string
  company: string
  thickness: string
}

// API のレスポンス型
export type LinesApiResponse = {
  result?: Line
  status: number
  message?: string
}

// API のエントリポイント
export default function LinesApi(
  req: NextApiRequest,
  res: NextApiResponse<LinesApiResponse>
): void {
  // const id = req.query.id as string
  // // 空データ（タイプチェック用）
  // const vacantData: Line = {
  //   'id': '',
  //   'imageUrl': '',
  //   'imageAlt': '',
  //   'createdAt': '',
  //   'lineType': '',
  //   'name': '',
  //   'company': '',
  //   'thickness': '',
  // } 

  // // cretaeとeditで同じフォームを使いまわしているため、
  // // idが存在しない場合undefinedになる
  // // これとは別にeditやdetailでもid取得のラグでbad requestエラーが出ていたので
  // // 下記記述で回避する
  // const line = id !== 'undefined' && id !== '0'? fetchLineData(id): vacantData
  // if (line) {
  //   res.status(200).json({ line })
  // } else {
  //   res.status(400).json({ debugMessage: `Line [id=${id}] not found` })
  // }
}

// 擬似的なデータフェッチ関数
function fetchLineData(id: string): Line | undefined {
  const lines: Line[] = [
    {
      id: '1',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      lineType: '11',
      name: 'super good nylon',
      company: 'DAIWA',
      thickness: '3'
    },
  ]
  return lines.find((line) => line.id === id)
}