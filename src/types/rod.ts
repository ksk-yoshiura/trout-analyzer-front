export type RodBasic = {// 共通項目
  ID: string
  name: string
  length: string
  thickness: string
  CreatedAt: string
}

export type RodsList<RodBasic, RodImage, RodHardnessCondition> = { // 一覧
  RodBasic: RodBasic
  RodImage: RodImage
  RodHardnessCondition: RodHardnessCondition
}

export type RodDetail<RodBasic, RodImage, RodHardnessCondition> = { // 詳細
  RodHardnessCondition: RodHardnessCondition
  RodTypeId: string
  companyName: string
  hardness: string
  RodBasic: RodBasic
  RodImage: RodImage
}

export type RodImage = { // 画像
  ID: string
  image_file: string
}

// オプション
export type RodHardnessCondition = { typeName: string }

// タックル一覧用
export type RodForTackle = {
  ID: string
  name: string
}