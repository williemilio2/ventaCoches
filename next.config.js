const nextConfig = {
  webpack(config) {
    config.externals.push("@sparticuz/chromium");
    return config;
  },
};

module.exports = nextConfig;