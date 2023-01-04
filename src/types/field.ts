export type FieldBasic = { // 共通項目
  ID: string
  lastVisitedAt: string
  name: string
}

export type FieldsList<FieldBasic, FieldImage> = { // 一覧
  FieldBasic: FieldBasic
  FieldImage: FieldImage
}

export type FieldDetail<FieldBasic, FieldImage> = { // 詳細
  name: string
  address: string
  frequency: string
  CreatedAt: string
  FieldBasic: FieldBasic
  FieldImage: FieldImage
}

export type FieldImage = { // 画像
  ID: string
  CreatedAt: string
  field_id: number
  image_file: string
}