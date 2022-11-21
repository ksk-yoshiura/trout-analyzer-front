export type Reel = {
  ID: string
  imageUrl: string
  imageAlt: string
  CreatedAt: string
  name: string
  companyName: string
  TypeNumberCondition: { typeName: string }
  GearCondition: { typeName: string }
  ReelImage: {
    ID: string
    image_file: string
  }
}