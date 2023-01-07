export type RodsList<RodImage, RodHardnessCondition> = { // 一覧
  ID: string
  name: string
  length: string
  thickness: string
  CreatedAt: string
  RodImage: RodImage
  RodHardnessCondition: RodHardnessCondition
}

export type RodDetail<RodImage, RodHardnessCondition> = { // 詳細
  ID: string
  name: string
  length: string
  thickness: string
  CreatedAt: string
  RodHardnessCondition: RodHardnessCondition
  RodTypeId: string
  companyName: string
  hardness: string
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

export type RodForm = { // 登録フォーム
  ID?: string
  name?: string
  companyName?: string
  hardness?: string
  length?: string
  image?: File
}
