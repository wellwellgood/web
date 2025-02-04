module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.module\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      });
      return config;
    },
  };