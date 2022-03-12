
import { useSession } from "next-auth/react"
import axios from 'axios'

// デフォルト
export const axiosDefaultInstance = axios.create({
  baseURL: process.env.NEXTAUTH_BACK_URL,
  timeout: 5000
})
export const createAxiosInstance = () => { 
  // セッションからアクセストークンを取得
  const { data: session } = useSession();

  // axiosにヘッダー情報付与
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  
  // jwtトークンをアクセストークンから取得
  // ヘッダーに仕込む
  axiosDefaultInstance.interceptors.request.use(config => {
    if (session?.accessToken && config?.headers) {
      config.headers.Authorization = `Bearer ${session.accessToken}`
    }
    return config
  })

  // axiosインスタンス返却
  return axiosDefaultInstance
}

