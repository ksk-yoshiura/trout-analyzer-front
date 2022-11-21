export type Line = {
  ID: string
  imageUrl: string
  imageAlt: string
  CreatedAt: string
  LineCondition: {
    typeName: string
  }
  lineTypeId: string
  name: string
  companyName: string
  thickness: string
  LineImage: {
    ID: string
    image_file: string
  }
}