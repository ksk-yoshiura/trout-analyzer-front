import type { LureType } from "./lure_type"

export type Lure = {
  ID: string
  imageUrl: string
  imageAlt: string
  CreatedAt: string
  lastUsedAt: string
  LureType: LureType
  name: string
  companyName: string
  color: string
  weight: string
  frequency: string
  Color: {
    ID: string
    code: string
    name: string
  }
  LureImage: {
    ID: string
    image_file: string
  }
}