export type LinesList<LineImage, LineCondition> = { // 一覧
  ID: string
  name: string
  thickness: string
  CreatedAt: string
  LineImage: LineImage
  LineCondition: LineCondition
}

export type LineDetail<LineImage, LineCondition> = { // 詳細
  ID: string
  name: string
  thickness: string
  CreatedAt: string
  LineCondition: LineCondition
  lineTypeId: string
  companyName: string
  LineImage: LineImage
}

export type LineImage = { // 画像
  ID: string
  image_file: string
}

export type LineCondition = { // オプション
  typeName: string
}

// タックル一覧用
export type LineForTackle = {
  ID: string
  name: string
}