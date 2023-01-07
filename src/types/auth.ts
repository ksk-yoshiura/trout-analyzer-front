export type SignUpForm = { // 登録
  email: string
  password: string
  passwordConfirm: string
}

export type Credentials = { // 認証
  mailaddress?: string
  password?: string
}

export type Login = { // ログイン
  mailaddress: string
  password: string
}

export type ResetPasswordForm = { // パスワード再設定
  currentPassword: string
  newPassword: string
  passwordConfirm: string
}