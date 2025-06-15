/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
module.exports = {
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/yourInviteCodeHere',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
