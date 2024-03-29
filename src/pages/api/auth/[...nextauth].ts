import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import type { Credentials } from '../../../types/auth'
import { CreateAxiosDefaultInstance } from '../utils'

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        mailaddress: {
          label: 'mailaddress',
          type: 'input',
          placeholder: 'mailaddress',
        },
        password: {
          label: 'password',
          type: 'input',
          placeholder: 'password',
        },
      },
      authorize: async (credentials, req) => {
        const postData: Credentials = { // ログイン情報
          mailaddress: credentials?.mailaddress,
          password: credentials?.password,
        };

        // axiosの設定
        const axiosInstance = CreateAxiosDefaultInstance()

        // ログインAPI
        const res = await axiosInstance.post('login', postData)
          .then((v) => {
            return v.data.token
          })
          .catch((error) => {
            console.log(error)
            console.log(req)
          })

        // If no error and we have user data, return it
        if (res) {
          const data = {
            token: res,
            user: {
              mailaddress: postData.mailaddress
            }
          }
          return data;
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // 最初のサインイン
      if (account && user) {
        return {
          ...token,
          accessToken: user.token,
          refreshToken: user.refreshToken,
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.accessTokenExpires = token.accessTokenExpires;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  // サインイン・サインアウトで飛ぶカスタムログインページを指定
  // サインアウト時に、”Are you sure you want to sign out?”と聞かれるページを挟むのをスキップする
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === "development",
});