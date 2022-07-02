import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from 'react'
import { SWRConfig } from 'swr'

import Layout from "../components/layout/Layout";
import { CreateAxiosInstance } from "../pages/api/utils"

// デフォルトの breakpoints
// https://chakra-ui.com/docs/theming/theme#breakpoints
const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

const theme = extendTheme({
  breakpoints,
  // デフォルトのフォント
  // https://chakra-ui.com/docs/theming/theme#typography
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  // デフォルトのカラーモード
  // https://chakra-ui.com/docs/theming/theme#config
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps): JSX.Element {
  /** 
   * このページでは全ページ共通項目を設定
   * 1. Chakra UIの読み込み
   * 2. レポンシブヘッダー、サイドメニュー
   * 3. API利用のためのfetcher準備
  */
  const SWRComponent = () => {
    // axiosの設定
    const axiosInstance = CreateAxiosInstance()
    // axiosInstanceはuseSessionからアクセストークンを取得しているので
    // SessionProviderコンポーネントより内側で呼ぶ必要がある
    const fetcher = (url: string) => {
      return axiosInstance.get(url)
        .then((res) => {
          return res.data
        })
    }

    return (
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    )
  }

  /**
   * 下記記事を参考にWarning: Expected server HTML to contain a matching <div> in <div>.
   * を解消
   * https://github.com/vercel/next.js/discussions/17443
   */
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted ?
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <SWRComponent />
        </ChakraProvider>
      </SessionProvider>
      : <></>
  );
}