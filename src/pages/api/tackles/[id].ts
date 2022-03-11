import type { NextApiRequest, NextApiResponse } from 'next'

export type Tackle = {
  id: string
  createdAt: string
  rod: {
    id: string
    name: string
    imageUrl: string
    imageAlt: string
    length: string
    hardness: string
    companyName: string
    createdAt: string
  },
  reel: {
    id: string
    name: string
    imageUrl: string
    imageAlt: string
    type: string
    gear: string
    companyName: string
    createdAt: string
  },
  line: {
    id: string
    name: string
    imageUrl: string
    imageAlt: string
    thickness: string
    lineType: string
    companyName: string
    createdAt: string
  }
}

// API のレスポンス型
export type TacklesApiResponse = {
  result?: Tackle
  status: number
  message?: string
}

// API のエントリポイント
export default function TacklesApi(
  req: NextApiRequest,
  res: NextApiResponse<TacklesApiResponse>
): void {
  // const id = req.query.id as string
  // // 空データ（タイプチェック用）
  // const vacantData: Tackle = {
  //   'id': '',
  //   'createdAt': '',
  //   'rod': {
  //     'id': '',
  //     'name': '',
  //     'imageUrl': '',
  //     'imageAlt': '',
  //     'length': '',
  //     'hardness': '',
  //     'companyName': '',
  //     'createdAt': '',
  //   },
  //   'reel': {
  //     'id': '',
  //     'name': '',
  //     'imageUrl': '',
  //     'imageAlt': '',
  //     'type': '',
  //     'gear': '',
  //     'companyName': '',
  //     'createdAt': '',
  //   },
  //   'line': {
  //     'id': '',
  //     'name': '',
  //     'imageUrl': '',
  //     'imageAlt': '',
  //     'thickness': '',
  //     'lineType': '',
  //     'companyName': '',
  //     'createdAt': '',
  //   }
  // }

  // // cretaeとeditで同じフォームを使いまわしているため、
  // // idが存在しない場合undefinedになる
  // // これとは別にeditやdetailでもid取得のラグでbad requestエラーが出ていたので
  // // 下記記述で回避する
  // const tackle = id !== 'undefined'? fetchTackleData(id) : vacantData
  // if (tackle) {
  //   res.status(200).json({ tackle })
  // } else {
  //   res.status(400).json({ debugMessage: `Tackle [id=${id}] not found` })
  // }
}

// 擬似的なデータフェッチ関数
function fetchTackleData(id: string): Tackle | undefined {
  const tackles: Tackle[] = [
    {
      id: '1',
      createdAt: '2021/12/28',
      rod: {
        id: '1',
        name: 'super good rod',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'rod image',
        length: '6',
        hardness: 'ML',
        companyName: 'Daiwa',
        createdAt: '2021/02/22'
      },
      reel: {
        id: '1',
        name: 'super great reel',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: '',
        type: '2000',
        gear: 'HG',
        companyName: 'Shimano',
        createdAt: '2021/02/22'
      },
      line: {
        id: '1',
        name: 'good line',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: '',
        thickness: '3',
        lineType: 'Nylon',
        companyName: 'Daiwa',
        createdAt: '2021/02/22'
      }
    },
    {
      id: '2',
      createdAt: '2021/12/28',
      rod: {
        id: '1',
        name: 'super good rod',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'rod image',
        length: '6',
        hardness: 'ML',
        companyName: 'Daiwa',
        createdAt: '2021/02/22'
      },
      reel: {
        id: '1',
        name: 'super great reel',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: '',
        type: '2000',
        gear: 'HG',
        companyName: 'Shimano',
        createdAt: '2021/02/22'
      },
      line: {
        id: '1',
        name: 'good line',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: '',
        thickness: '3',
        lineType: 'Nylon',
        companyName: 'Daiwa',
        createdAt: '2021/02/22'
      }
    },
    {
      id: '3',
      createdAt: '2021/12/28',
      rod: {
        id: '1',
        name: 'super good rod',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'rod image',
        length: '6',
        hardness: 'ML',
        companyName: 'Daiwa',
        createdAt: '2021/02/22'
      },
      reel: {
        id: '1',
        name: 'super great reel',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: '',
        type: '2000',
        gear: 'HG',
        companyName: 'Shimano',
        createdAt: '2021/02/22'
      },
      line: {
        id: '1',
        name: 'good line',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: '',
        thickness: '3',
        lineType: 'Nylon',
        companyName: 'Daiwa',
        createdAt: '2021/02/22'
      }
    },
    {
      id: '4',
      createdAt: '2021/12/28',
      rod: {
        id: '1',
        name: 'super good rod',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'rod image',
        length: '6',
        hardness: 'ML',
        companyName: 'Daiwa',
        createdAt: '2021/02/22'
      },
      reel: {
        id: '1',
        name: 'super great reel',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: '',
        type: '2000',
        gear: 'HG',
        companyName: 'Shimano',
        createdAt: '2021/02/22'
      },
      line: {
        id: '1',
        name: 'good line',
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: '',
        thickness: '3',
        lineType: 'Nylon',
        companyName: 'Daiwa',
        createdAt: '2021/02/22'
      }
    }
  ]
  return tackles.find((tackle) => tackle.id === id)
}