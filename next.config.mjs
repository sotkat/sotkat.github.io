/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/sotkat.github.io",
  images: {
    unoptimized: true,
  },
  output: "export",
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

export default nextConfig;
