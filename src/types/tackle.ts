export type TacklesList<RodForTackle, ReelForTackle, LineForTackle> = { // 一覧
  ID: string
  CreatedAt: string
  Rod: RodForTackle,
  Reel: ReelForTackle,
  Line: LineForTackle
}

export type TackleDetail<RodDetail, ReelDetail, LineDetail> = { // 詳細
  ID: string
  CreatedAt: string
  Rod: RodDetail,
  Reel: ReelDetail,
  Line: LineDetail
}

export type TackleForm = { // 登録フォーム
  rodId?: string | number
  reelId?: string | number
  lineId?: string | number
}