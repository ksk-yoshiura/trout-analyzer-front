import axios from 'axios'
import { useState } from 'react'

type LoginData = {
  mailaddress?: string;
  password?: string;
}

const instance = axios.create({
  baseURL: 'http://localhost:3030',
  timeout: 5000
})

export const usePostUsers = (values: LoginData) => {
  console.log(values)
  const [token, setToken] = useState('')
  instance.post('/login', values)
    .then((v) => {
      return v.data.token
    })
    .catch((error) => {
      console.log(error)
    })
    return 

}