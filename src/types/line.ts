export type LineBasic = {// 共通項目
  ID: string
  name: string
  thickness: string
  CreatedAt: string
}

export type LinesList<LineBasic, LineImage, LineCondition> = { // 一覧
  LineBasic: LineBasic
  LineImage: LineImage
  LineCondition: LineCondition
}

export type LineDetail<LineBasic, LineImage, LineCondition> = { // 詳細
  LineCondition: LineCondition
  lineTypeId: string
  companyName: string
  LineBasic: LineBasic
  LineImage: LineImage
}

export type LineImage = { // 画像
  ID: string
  image_file: string
}

export type LineCondition = { // オプション
  typeName: string
}