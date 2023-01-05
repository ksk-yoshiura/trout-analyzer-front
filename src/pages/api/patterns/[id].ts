import type { NextApiRequest, NextApiResponse } from 'next'

import type { Color } from "../../../types/color"
import type { LineCondition, LineDetail, LineImage } from '../../../types/line'
import type { LureDetail, LureImage } from "../../../types/lure"
import type { LureType } from "../../../types/lure_type"
import type { DepthCondition, PatternDetail, ResultCondition, SpeedCondition, WeatherCondition } from "../../../types/pattern"
import type { GearCondition, ReelDetail, ReelImage, TypeNumberCondition } from '../../../types/reel'
import type { RodDetail, RodHardnessCondition, RodImage } from '../../../types/rod'
import type { TackleDetail } from "../../../types/tackle"

// API のレスポンス型
export type PatternApiResponse = {
  result?: PatternDetail<TackleDetail<RodDetail<RodImage, RodHardnessCondition>, ReelDetail<ReelImage, GearCondition, TypeNumberCondition>, LineDetail<LineImage, LineCondition>>,
    ResultCondition,
    SpeedCondition,
    DepthCondition,
    WeatherCondition,
    LureDetail<LureType, LureImage, Color>>
  status: number
  message?: string
}

// API のエントリポイント
export default function PatternApi(
  req: NextApiRequest,
  res: NextApiResponse<PatternApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
