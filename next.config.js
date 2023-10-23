/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'haditechsolutions.ir',
      },
    ],
  },
  env: {
    NEXTAUTH_URL: 'http://localhost:3000', // Replace with your actual URL
  },
};

module.exports = nextConfig;
