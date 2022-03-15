
import { useSession } from "next-auth/react"
import axios from 'axios'
const apiURL = process.env.NEXT_PUBLIC_BACK_URL

// デフォルト
export const axiosDefaultInstance = axios.create({
  baseURL: apiURL,
  timeout: 5000
})

// デフォルトAPI
export const axiosDefaultAPIInstance = axios.create({
  baseURL: apiURL + '/api/',
  timeout: 5000
})

export const createAxiosInstance = () => { 
  // セッションからアクセストークンを取得
  const { data: session } = useSession();

  // axiosにヘッダー情報付与
  axiosDefaultAPIInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axiosDefaultAPIInstance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  
  // jwtトークンをアクセストークンから取得
  // ヘッダーに仕込む
  axiosDefaultAPIInstance.interceptors.request.use(config => {
    if (session?.accessToken && config?.headers) {
      config.headers.Authorization = `Bearer ${session.accessToken}`
    }
    return config
  })

  // axiosインスタンス返却
  return axiosDefaultAPIInstance
}

