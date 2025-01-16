/** @type {import('next').NextConfig}  */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    // Disables linting during builds
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
