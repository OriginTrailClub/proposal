const config = {
  reactStrictMode: true,
}

module.exports = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})(config)
