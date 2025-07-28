/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 necesario para generar sitio estático

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // 👈 necesario si usas <Image> de next/image
  },
};

export default nextConfig;