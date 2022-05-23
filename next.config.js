const API_URL = process.env.NEXT_PUBLIC_API_URL
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL,
  },
}

module.exports = nextConfig
