type imageData = {
  size?: number
}

/**
 * サイズが大きすぎるとpayload too longでエラーになる
 */
const validateImage = (value: imageData): string | undefined => {
  let error
  if (value && value.size && value.size > 300000) {
    error = 'Image size should be less than 300K'
  }
  return error
}

export default validateImage