/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  // 不需要这些实验性功能，它们在13.x版本中有不同的形式
  // experimental: {
  //   skipTrailingSlashRedirect: true,
  //   serverComponentsExternalPackages: ["styled-components"],
  // },
  // 保留忽略检查，这样不会有警告
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig; 