export const RecordDetailMock = 
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

  };