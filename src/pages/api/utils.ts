
import type { AxiosInstance } from 'axios';
import axios from 'axios'
import { useSession } from "next-auth/react"

const apiURL = process.env.NEXT_PUBLIC_BACK_URL

// デフォルト
export const axiosDefaultInstance = axios.create({
  baseURL: apiURL,
  timeout: 50000 // 時間がかかりすぎ？
})

// デフォルトAPI
export const axiosDefaultAPIInstance = axios.create({
  baseURL: apiURL + '/api/',
  timeout: 50000 // 時間がかかりすぎ？
})

/**
 * API非経由
 * ログイン、サインアップ
 */
export const CreateAxiosDefaultInstance = (): AxiosInstance => {

  // axiosにヘッダー情報付与
  axiosDefaultInstance.defaults.headers.post['Access-Control-Allow-Origin'] = apiURL ?? "*";
  axiosDefaultInstance.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

  // axiosインスタンス返却
  return axiosDefaultInstance
}

/**
 * API
 */
export const CreateAxiosInstance = (): AxiosInstance => {

  // セッションからアクセストークンを取得
  const { data: session } = useSession();

  // axiosにヘッダー情報付与
  axiosDefaultAPIInstance.defaults.headers.post['Access-Control-Allow-Origin'] = apiURL + '/api/' ?? "*";
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

