export type Field = {
  ID: string
  imageUrl: string
  imageAlt: string
  CreatedAt: string
  lastVisitedAt: string
  name: string
  address: string
  frequency: string
  FieldImage: {
    ID: string
    CreatedAt: string
    field_id: number
    image_file: string
  }
}