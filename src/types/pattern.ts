export type PatternList<ResultCondition, SpeedCondition, DepthCondition, WeatherCondition, Lure> = { // 一覧
  ID: string
  CreatedAt: string
  // バッジ情報
  // 釣果
  ResultCondition: ResultCondition
  SpeedCondition: SpeedCondition
  DepthCondition: DepthCondition
  WeatherCondition: WeatherCondition
  // ルアー情報
  Lure: Lure
}

export type PatternDetail<Tackle, ResultCondition, SpeedCondition, DepthCondition, WeatherCondition, Lure> = { // 詳細
  ID: string
  CreatedAt: string
  // バッジ情報
  // 釣果
  ResultCondition: ResultCondition
  SpeedCondition: SpeedCondition
  DepthCondition: DepthCondition
  WeatherCondition: WeatherCondition
  // ルアー情報
  Lure: Lure
  // タックル
  Tackle: Tackle
}

export type ResultCondition = {
  typeName: string
}

export type SpeedCondition = {
  typeName: string
}

export type DepthCondition = {
  typeName: string
}

export type WeatherCondition = {
  typeName: string
}