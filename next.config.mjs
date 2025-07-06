/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  
  // Configure image optimization for static export
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Suppress webpack warnings about source maps
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.ignoreWarnings = [
        /Failed to parse source map/,
        /Module Warning/,
      ];
    }
    return config;
  },
  
  // Handle static assets
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Disable trailing slash for cleaner URLs
  trailingSlash: false,
  
  // Optimize static export
  experimental: {
    optimizePackageImports: ['framer-motion', '@remixicon/react'],
  },
};

export default nextConfig;
