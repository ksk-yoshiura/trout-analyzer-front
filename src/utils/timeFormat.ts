const getTimeFormatted = (value: string): string => {
  const date = new Date(value);
  const time = date.toLocaleTimeString()
  return time;
}

export default getTimeFormatted