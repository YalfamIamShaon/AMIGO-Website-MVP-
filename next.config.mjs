/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure we don't have issues with trailing slashes or other standard SPA configurations
  trailingSlash: true,
};

export default nextConfig;
