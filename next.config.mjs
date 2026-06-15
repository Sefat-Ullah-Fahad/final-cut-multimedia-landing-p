/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'finalcutmultimedia.com',
      },
    ],
  },
};

export default nextConfig;