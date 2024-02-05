/** @type {import('next').NextConfig} */
const nextConfig = {
  /** for importing images from sanity */
  images: {
    remotePatterns: [
      {
      protocol: "https",
      hostname: "cdn.sanity.io",
      }
    ]
  }
};

export default nextConfig;
