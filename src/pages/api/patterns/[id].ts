import type { NextApiRequest, NextApiResponse } from 'next'

export type Pattern = {
  id: string
  imageUrl: string
  imageAlt: string
  createdAt: string
  lastUsedAt: string
  // バッジ情報
  badge: {
    // ルアータイプ
    lureType: string
    // 釣果と状況
    result: string
    weather: string
    depth: string
    speed: string
  },
  // ルアー情報
  lure: {
    lureType: string
    lureName: string
    lureCompany: string
    lureColor: string
    lureWeight: string
  },

  // タックル
  // ロッド
  rod: {
    rodName: string
    rodHardness: string
    rodLength: string
    rodCompany: string
  },
  // リール
  reel: {
    reelName: string
    reelType: string
    reelGear: string
    reelCompany: string
  },
  // ライン
  line: {
    lineName: string
    lineThickness: string
    lineType: string
    lineCompany: string
  },
}

// API のレスポンス型
export type PatternApiResponse = {
  result?: Pattern
  status: number
  message?: string
}

// API のエントリポイント
export default function PatternApi(
  req: NextApiRequest,
  res: NextApiResponse<PatternApiResponse>
): void {
  // const id = req.query.id as string
  // // 空データ（タイプチェック用）
  // const vacantData: Pattern = {
  //   'id': '',
  //   'imageUrl': '',
  //   'imageAlt': '',
  //   'createdAt': '',
  //   'lastUsedAt': '',
  //   // バッジ情報
  //   'badge': {
  //     // ルアータイプ
  //     'lureType': '',
  //     // 釣果と状況
  //     'result': '',
  //     'weather': '',
  //     'depth': '',
  //     'speed': '',
  //   },
  //   // ルアー情報
  //   'lure': {
  //     'lureType': '',
  //     'lureName': '',
  //     'lureCompany': '',
  //     'lureColor': '',
  //     'lureWeight': '',
  //   },
  
  //   // タックル
  //   // ロッド
  //   'rod': {
  //     'rodName': '',
  //     'rodHardness': '',
  //     'rodLength': '',
  //     'rodCompany': '',
  //   },
  //   // リール
  //   'reel': {
  //     'reelName': '',
  //     'reelType': '',
  //     'reelGear': '',
  //     'reelCompany': '',
  //   },
  //   // ライン
  //   'line': {
  //     'lineName': '',
  //     'lineThickness': '',
  //     'lineType': '',
  //     'lineCompany': '',
  //   },
  // }

  // // cretaeとeditで同じフォームを使いまわしているため、
  // // idが存在しない場合undefinedになる
  // // これとは別にeditやdetailでもid取得のラグでbad requestエラーが出ていたので
  // // 下記記述で回避する
  // const pattern = id !== 'undefined' && id !== '0' ?  fetchPatternData(id) : vacantData
  // if (pattern) {
  //   res.status(200).json({ pattern })
  // } else {
  //   res.status(400).json({ debugMessage: `Pattern [id=${id}] not found` })
  // }
}

// 擬似的なデータフェッチ関数
function fetchPatternData(id: string): Pattern | undefined {
  const patterns: Pattern[] = [
    {
      id: '1',
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'lure image',
      createdAt: '2021/12/28',
      lastUsedAt: '2021/12/28',
      // バッジ情報
      badge: {
        // ルアータイプ
        lureType: 'spoon',
        // 釣果と状況
        result: 'caught',
        weather: 'sunny',
        depth: 'shallow',
        speed: 'fast'
      },
      // ルアー情報
      lure: {
        lureType: 'spoon',
        lureName: 'super great bait',
        lureCompany: 'no brand',
        lureColor: 'red',
        lureWeight: '2',
      },

      // タックル
      // ロッド
      rod: {
        rodName: 'good rod',
        rodHardness: 'ML',
        rodLength: '6',
        rodCompany: 'no brand'
      },
      // リール
      reel: {
        reelName: 'good reel',
        reelType: '2000',
        reelGear: 'HG',
        reelCompany: 'no brand'
      },
      // ライン
      line: {
        lineName: 'great line',
        lineThickness: '3',
        lineType: 'nylon',
        lineCompany: 'no brand'
      },
    }
  ]
  return patterns.find((pattern) => pattern.id === id)
}