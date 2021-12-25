const withPWA = require("next-pwa");

module.exports = withPWA({
  trailingSlash: true,
  pwa: {
    dest: "public",
    cacheOnFrontEndNav: true,
    disable: process.env.NODE_ENV === "development",
    // sw: "/pwabuilder-sw.js",
  },
});
