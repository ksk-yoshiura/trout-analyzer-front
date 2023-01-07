export type RecordsAllList<Field> = { // 一覧
  ID: string
  CreatedAt: string
  Field: Field
}

export type RecordForm = { // 登録フォーム
  result?: number;
  speed?: number;
  depth?: number;
  weather?: number;
  lureId: number;
  tackleId: number;
  recordId: number;
}