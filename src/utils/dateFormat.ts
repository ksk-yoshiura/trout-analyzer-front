export function getDateFormatted(value: string) {
  const date = new Date(value);
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  return year + '-' + month + '-' + day;
}