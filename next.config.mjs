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
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.pdf$/,
  //     type: "asset/resource", // O usa 'file-loader' si es necesario
  //   });
  //   return config;
  // },
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
