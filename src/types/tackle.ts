export type TacklesList<RodForTackle, ReelForTackle, LineForTackle> = { // 一覧
  ID: string
  CreatedAt: string
  RodForTackle: RodForTackle,
  ReelForTackle: ReelForTackle,
  LineForTackle: LineForTackle
}

export type TackleDetail<RodDetail, ReelDetail, LineDetail> = { // 詳細
  ID: string
  CreatedAt: string
  RodDetail: RodDetail,
  ReelDetail: ReelDetail,
  LineDetail: LineDetail
}