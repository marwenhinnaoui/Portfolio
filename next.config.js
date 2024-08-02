/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
