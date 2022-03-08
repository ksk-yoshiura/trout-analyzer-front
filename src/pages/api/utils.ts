
import { useSession } from "next-auth/react"
import axios from 'axios'

export const instance = () => { 
  // セッションからアクセストークンを取得
  const { data: session } = useSession();

  // axiosにヘッダー情報付与
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  // 基本情報付与
  const instance = axios.create({
    baseURL: 'http://localhost:3030/api/',
    timeout: 5000
  })
  
  // jwtトークンをアクセストークンから取得
  // ヘッダーに仕込む
  instance.interceptors.request.use(config => {
    if (session?.accessToken && config?.headers) {
      config.headers.Authorization = `Bearer ${session.accessToken}`
    }
    return config
  })

  // axiosインスタンス返却
  return instance
}

