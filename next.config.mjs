/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  output: "standalone",
  basePath: '/portfolio', // Set your base path here
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
