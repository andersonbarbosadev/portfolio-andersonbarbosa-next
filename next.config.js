const path = require("path");
const { i18n } = require("./next-i18next.config");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },

      {
        protocol: "https",
        hostname: "blog.andersonbarbosa.site",
      },
    ],
  },
};
