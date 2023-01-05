export type FieldsList<FieldImage> = { // 一覧
  ID: string
  lastVisitedAt: string
  name: string
  FieldImage: FieldImage
}

export type FieldDetail<FieldImage> = { // 詳細
  ID: string
  lastVisitedAt: string
  name: string
  address: string
  frequency: string
  CreatedAt: string
  FieldImage: FieldImage
}

export type FieldImage = { // 画像
  ID: string
  CreatedAt: string
  field_id: number
  image_file: string
}