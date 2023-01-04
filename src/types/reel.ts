export type Reel = {
  ID: string
  imageUrl: string
  imageAlt: string
  CreatedAt: string
  name: string
  companyName: string
  TypeNumberCondition: { typeName: string }
  GearCondition: { typeName: string }
  ReelImage: {
    ID: string
    image_file: string
  }
}

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