import type { NextApiRequest, NextApiResponse } from 'next'

import type { LineCondition, LineDetail, LineImage } from '../../../types/line'
import type { GearCondition, ReelDetail, ReelImage, TypeNumberCondition } from '../../../types/reel'
import type { RodDetail, RodHardnessCondition, RodImage } from '../../../types/rod'
import type { TackleDetail } from '../../../types/tackle'

// API のレスポンス型
export type TackleDetailApiResponse = {
  result?: TackleDetail<RodDetail<RodImage, RodHardnessCondition>, ReelDetail<ReelImage, GearCondition, TypeNumberCondition>, LineDetail<LineImage, LineCondition>>
  status: number
  message?: string
}

// API のエントリポイント
export default function TacklesApi(
  req: NextApiRequest,
  res: NextApiResponse<TackleDetailApiResponse>
): void {
  if (req.body) {
    res.status(200).json(req.body)
  }
}
