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
    remotePatterns: [new URL('https://8hgkm4p86z.ufs.sh/f/**')],
  },
}

export default nextConfig
