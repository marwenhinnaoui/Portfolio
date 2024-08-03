/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marwen-hinaoui.tn",
      },
    ],
  },
};

module.exports = nextConfig;
