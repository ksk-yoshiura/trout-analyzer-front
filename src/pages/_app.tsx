import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SessionProvider } from "next-auth/react";
import { AppProps } from 'next/app';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import Layout from "../components/layout/Layout";
import { SWRConfig } from 'swr'
import axios from 'axios'

const fetcher = (url: string) => axios(url)
  .then((res) => {
    return res.data
  })

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


  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <SWRConfig value={{ fetcher }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </SessionProvider>
    </ChakraProvider>
  );
}