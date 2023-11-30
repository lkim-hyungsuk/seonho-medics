/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "natus.com",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "img.medicalexpo.com",
        port: "",
        pathname: "/images_me/**",
      },
      {
        protocol: "https",
        hostname: "www.laborie.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "s.alicdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "neuroptics.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
