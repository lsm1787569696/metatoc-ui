const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api/sendMsg": {
        target: "http://127.0.0.1:3001",
        changOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
