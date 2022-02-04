import type { NextApiRequest, NextApiResponse } from 'next'

export type Tackle = {
  id: string
  createdAt: string
    rod: {
      name: string
      imageUrl: string
      imageAlt: string
      length: string
      hardness: string
    },
    reel: {
      name: string
      imageUrl: string
      imageAlt: string
      type: string
      gear: string
    },
    line: {
      name: string
      imageUrl: string
      imageAlt: string
      thickness: string
    }
}

// API のレスポンス型
export type TacklesApiResponse = {
  tackle?: Tackle[]
  debugMessage?: string
}

// API のエントリポイント
export default function TacklesApi(
  req: NextApiRequest,
  res: NextApiResponse<TacklesApiResponse>
): void {
  const id = req.query.id as string
  const tackle = fetchTackleData()
  if (tackle) {
    res.status(200).json({ tackle })
  } else {
    res.status(400).json({ debugMessage: `Tackle not found` })
  }
}

// 擬似的なデータフェッチ関数
function fetchTackleData(): Tackle[] | undefined {
  const tackles: Tackle[] = [
    {
      id: '1',
      createdAt: '2021/12/28',
      rod: {
        name: 'super good rod',
        imageUrl: '',
        imageAlt: 'rod image',
        length: '6',
        hardness: 'ML'
      },
      reel: {
        name: 'super great reel',
        imageUrl: '',
        imageAlt: '',
        type: '2000',
        gear: 'HG'
      },
      line: {
        name: 'good line',
        imageUrl: '',
        imageAlt: '',
        thickness: '3'
      }
    },
    {
      id: '2',
      createdAt: '2021/12/28',
      rod: {
        name: 'super good rod',
        imageUrl: '',
        imageAlt: 'rod image',
        length: '6',
        hardness: 'ML'
      },
      reel: {
        name: 'super great reel',
        imageUrl: '',
        imageAlt: '',
        type: '2000',
        gear: 'HG'
      },
      line: {
        name: 'good line',
        imageUrl: '',
        imageAlt: '',
        thickness: '3'
      }
    },
    {
      id: '3',
      createdAt: '2021/12/28',
      rod: {
        name: 'super good rod',
        imageUrl: '',
        imageAlt: 'rod image',
        length: '6',
        hardness: 'ML'
      },
      reel: {
        name: 'super great reel',
        imageUrl: '',
        imageAlt: '',
        type: '2000',
        gear: 'HG'
      },
      line: {
        name: 'good line',
        imageUrl: '',
        imageAlt: '',
        thickness: '3'
      }
    },
    {
      id: '4',
      createdAt: '2021/12/28',
      rod: {
        name: 'super good rod',
        imageUrl: '',
        imageAlt: 'rod image',
        length: '6',
        hardness: 'ML'
      },
      reel: {
        name: 'super great reel',
        imageUrl: '',
        imageAlt: '',
        type: '2000',
        gear: 'HG'
      },
      line: {
        name: 'good line',
        imageUrl: '',
        imageAlt: '',
        thickness: '3'
      }
    },
    {
      id: '5',
      createdAt: '2021/12/28',
      rod: {
        name: 'super good rod',
        imageUrl: '',
        imageAlt: 'rod image',
        length: '6',
        hardness: 'ML'
      },
      reel: {
        name: 'super great reel',
        imageUrl: '',
        imageAlt: '',
        type: '2000',
        gear: 'HG'
      },
      line: {
        name: 'good line',
        imageUrl: '',
        imageAlt: '',
        thickness: '3'
      }
    },
    {
      id: '6',
      createdAt: '2021/12/28',
      rod: {
        name: 'super good rod',
        imageUrl: '',
        imageAlt: 'rod image',
        length: '6',
        hardness: 'ML'
      },
      reel: {
        name: 'super great reel',
        imageUrl: '',
        imageAlt: '',
        type: '2000',
        gear: 'HG'
      },
      line: {
        name: 'good line',
        imageUrl: '',
        imageAlt: '',
        thickness: '3'
      }
    },
    {
      id: '7',
      createdAt: '2021/12/28',
      rod: {
        name: 'super good rod',
        imageUrl: '',
        imageAlt: 'rod image',
        length: '6',
        hardness: 'ML'
      },
      reel: {
        name: 'super great reel',
        imageUrl: '',
        imageAlt: '',
        type: '2000',
        gear: 'HG'
      },
      line: {
        name: 'good line',
        imageUrl: '',
        imageAlt: '',
        thickness: '3'
      }
    }
  ]
  return tackles
}