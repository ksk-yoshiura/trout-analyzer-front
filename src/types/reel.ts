export type ReelsList<ReelImage, GearCondition> = { // 一覧
  ID: string
  name: string
  CreatedAt: string
  ReelImage: ReelImage
  GearCondition: GearCondition
}

export type ReelDetail<ReelImage, GearCondition, TypeNumberCondition> = { // 詳細
  ID: string
  name: string
  CreatedAt: string
  companyName: string
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