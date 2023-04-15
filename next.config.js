/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint:{
    ignoreDuringBuilds:true
  },
  images:{
    domains:["localhost:1337"]
  }
}

module.exports = nextConfig
