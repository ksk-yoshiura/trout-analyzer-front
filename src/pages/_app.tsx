import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react";
import { AppProps } from 'next/app';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import Layout from "../components/layout/Layout";
import { SWRConfig } from 'swr'
import { createAxiosInstance } from "../pages/api/utils"


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
    const axiosInstance = createAxiosInstance()
    // axiosInstanceはuseSessionからアクセストークンを取得しているので
    // SessionProviderコンポーネントより内側で呼ぶ必要がある
    const fetcher = (url: string) => axiosInstance.get(url)
      .then((res) => {
        return res.data
      })

    return (
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    )
  }

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <SWRComponent />
      </ChakraProvider>
    </SessionProvider>
  );
}