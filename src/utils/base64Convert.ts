// Base64に変換
const convertFileIntoBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => { return resolve(reader.result) };
    reader.onerror = error => { return reject(error) };
  });
}

export default convertFileIntoBase64