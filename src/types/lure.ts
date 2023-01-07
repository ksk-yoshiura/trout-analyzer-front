export type LuresList<LureType, LureImage> = { // 一覧
  ID: string
  name: string
  CreatedAt: string
  LureType: LureType
  LureImage: LureImage
}

export type LureDetail<LureType, LureImage, Color> = { // 詳細
  ID: string
  name: string
  CreatedAt: string
  companyName: string
  lureTypeId?: string
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

export type LuresListByType<Color, LureImage> = { // 登録画面中ルアーセレクト
  ID: string
  CreatedAt: string
  companyName: string
  Color: Color
  LureImage: LureImage
  weight: string
  name: string
}

export type LureForm = { // 登録フォーム
  ID?: string
  lureTypeId?: string
  name?: string
  companyName?: string
  color?: string
  weight?: string
  image?: File
  size?: number
}