/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Bitz Kasm Registry',
    description: 'Custom Kasm workspaces for BitzOS.',
    icon: '/img/logo.svg',
    listUrl: 'https://jtruland.github.io/kasm-registry/',
    contactUrl: 'https://github.com/jtruland/kasm-registry',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
