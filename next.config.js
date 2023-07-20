/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "sonderson-nft-marketplace.infura-ipfs.io",
      "infura-ipfs.io",
      "res.cloudinary.com",
      "via.placeholder.com",
    ],
  },
};

module.exports = nextConfig;
