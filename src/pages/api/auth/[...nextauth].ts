import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const postData = {
          mailaddress: credentials?.mailaddress,
          password: credentials?.password,
        };
        console.log(postData)

        // TODO：APIのpostにて、ユーザーテーブルからログインユーザデータを取得してくる
        const res = {message: '', data: [{mailaddress:'', password:''}]};
        console.log(res)

        if (res.message === "no data") {
          // throw new Error(res);
          return null;
        } else {
          console.log('yesssss!!')
          const user = {
            mailaddress: res.data[0].mailaddress,
            password: res.data[0].password,
          };
          return user;
        }
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