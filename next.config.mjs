/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  output: "standalone",
  // basePath: '/musicnext',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
