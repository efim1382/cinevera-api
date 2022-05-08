module.exports = {
  webpack: (config, options, webpack) => {
    // Perform customizations to config
    // Important: return the modified config

    config.entry.main = [
      "./src/server.js",
    ];

    config.resolve.alias = {
      "controllers": `${__dirname}/src/controllers`,
      "models": `${__dirname}/src/models`,
      "helpers": `${__dirname}/src/helpers`,
      "middlewares": `${__dirname}/src/middlewares`,
      "config": `${__dirname}/src/config`,
    };

    config.plugins = [
      ...config.plugins,

      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(config.mode),
        "process.env.MONGODB_URI": JSON.stringify(process.env.MONGODB_URI),
      }),
    ];

    return config;
  },
};
