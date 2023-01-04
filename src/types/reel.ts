export type ReelBasic = { // 共通項目
  ID: string
  name: string
  CreatedAt: string
}

export type ReelsList<ReelBasic, ReelImage, GearCondition> = { // 一覧
  ReelBasic: ReelBasic
  ReelImage: ReelImage
  GearCondition: GearCondition
}

export type ReelDetail<ReelBasic, ReelImage, GearCondition, TypeNumberCondition> = { // 詳細
  companyName: string
  ReelBasic: ReelBasic
  ReelImage: ReelImage
  GearCondition: GearCondition
  TypeNumberCondition: TypeNumberCondition
}

export type ReelImage = { // 画像
  ID: string
  image_file: string
}

// オプション
export type TypeNumberCondition = { typeName: string }
export type GearCondition = { typeName: string }

// タックル一覧用
export type ReelForTackle = {
  ID: string
  name: string
}