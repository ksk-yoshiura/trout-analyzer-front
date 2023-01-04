export type RecordBasic = {// 共通項目
  ID: string
  CreatedAt: string
}

export type RecordsAllList<RecordBasic, Field> = { // 一覧
  RecordBasic: RecordBasic
  Field: Field
}
