/** @type {import('next').NextConfig} */
import { withPWA } from "next-pwa";

module.exports = {
  reactStrictMode: true,
}

module.exports = withPWA({
  pwa: {
    dest: "public", // swの出力ディレクトリ
    // runtimeCaching: []
  },
  images: {
    domains: ['localhost'],
  },
});

