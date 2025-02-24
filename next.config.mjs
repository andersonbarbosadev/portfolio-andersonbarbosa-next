import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    ppr: 'incremental',  // Enable partial pre-rendering incrementally
    reactCompiler: true, // Enable React 19 Compiler optimizations
    turbo: {
      rules: {
      },
    },
  },
  images: {
    formats: ['image/avif', 'image/webp'],  // Optimize images with Next.js
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },

      {
        protocol: "https",
        hostname: "blog.andersonbarbosa.site",
      },
    ],
  }
}

export default withNextIntl(nextConfig);
