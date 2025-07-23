import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/dashboard',
        permanent: true,
      },
    ]
  },
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [new URL('http://localhost:3000/**')],
  },
}

export default nextConfig
