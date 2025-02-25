import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import createNextIntlPlugin from 'next-intl/plugin';

// If environment is development, open the dev console
if (process.env.NODE_ENV === 'development') {
  initOpenNextCloudflareForDev();
}

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    // ppr: 'incremental',  // Enable partial pre-rendering incrementally
    // reactCompiler: true, // Enable React 19 Compiler optimizations
  },
  images: {
    formats: ['image/avif', 'image/webp'],  // Optimize images with Next.js
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.andersonbarbosa.site",
      },
    ],
  }
}

export default withNextIntl(nextConfig);
