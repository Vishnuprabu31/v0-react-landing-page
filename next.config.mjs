/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/v0-react-landing-page',
  assetPrefix: '/v0-react-landing-page/',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
