/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  webpack5: true,
  pwa: {
    dest: 'public',
    register: false,
    skipWaiting: false,
  },
  env: {
    PUBLIC_URL: 'https://maxbarsukov.vercel.app/',
  },
})
