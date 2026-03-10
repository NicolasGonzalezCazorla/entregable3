/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com', // Este es el dominio que necesitamos
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;