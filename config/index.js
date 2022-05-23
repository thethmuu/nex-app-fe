import getConfig from 'next/config'

export const API_URL =
  getConfig().publicRuntimeConfig.API_URL || 'http://localhost:1337'

export const NEXT_URL =
  process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'