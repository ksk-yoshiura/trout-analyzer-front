import { CreateAxiosDefaultInstance } from "../pages/api/utils"

export default function Hello() {
  // APIからデータ取得
  const axiosInstance = CreateAxiosDefaultInstance()

  const postData = {
    mailaddress: "gogo123@example.com",
    password: "testpass",

  }
  axiosInstance.post('login', postData)
    .then((v) => {
      return v.data.token
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <>
      <h1>hello!!!</h1>
    </>
  )

}