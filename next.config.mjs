/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    output: "export",
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: './',
    distDir: 'dist'
  };
  
  export default nextConfig;