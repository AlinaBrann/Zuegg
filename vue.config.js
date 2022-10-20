const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/articles" : "/",
  
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/basics/_variables.scss";
          @import "@/assets/styles/basics/_mixins.sass";
          @import "@/assets/styles/basics/_functions.scss";
        `,
      },
    },
  },
  configureWebpack: {
    devtool: "source-map",

    plugins: [
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== "production",
        // disable: true,
        pngquant: {
          quality: "90-95",
        },
        plugins: [
          ImageminMozjpeg({
            quality: 85,
            progressive: true,
          }),
        ],
      }),
    ],
  },
};
