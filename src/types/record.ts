export type RecordsAllList<Field> = { // 一覧
  ID: string
  CreatedAt: string
  Field: Field
}

export type RecordForm = { // 登録フォーム
  result?: number
  speed?: number
  depth?: number
  weather?: number
  lureId: number
  tackleId: number
  recordId: number
}

export type SerialRecord = { // 詳細データ FIXME：応急処置
  result?: string | number
  speed?: string | number
  depth?: string | number
  weather?: string | number
  lure?: string | number
  tackle?: string | number
}