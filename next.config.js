/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/300/**',
      },
    ],
  },
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:8000/:path*' // Proxy to Backend
      }
    ]
  }
}

module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};

