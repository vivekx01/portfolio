/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  distDir: "out", // This sets the output directory to "out"
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
