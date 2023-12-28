/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.ipfs.nftstorage.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.unlock-protocol.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
