/** @type {import('next').NextConfig} */

const withImages = require('next-images');

const nextConfig = {
  ...withImages({
    images: {
      disableStaticImages: true,
    },
  }),
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig