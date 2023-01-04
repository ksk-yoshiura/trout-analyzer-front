export type LureBasic = { // 共通
  ID: string
  name: string
  CreatedAt: string
  // lastUsedAt: string
}

export type LuresList<LureBasic, LureType, LureImage> = { // 一覧
  LureBasic: LureBasic
  LureType: LureType
  LureImage: LureImage
}

export type LureDetail<LureBasic, LureType, LureImage, Color> = { // 詳細
  LureBasic: LureBasic
  companyName: string
  color: string
  weight: string
  frequency: string
  LureType: LureType
  LureImage: LureImage
  Color: Color
}

export type LureImage = { // 画像
  ID: string
  image_file: string
}