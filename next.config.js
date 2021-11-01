const withOptimizedImages = require('next-optimized-images');
const withMdx = require('@next/mdx');

let config = {
  reactStrictMode: true,

  images: {
    disableStaticImages: true,
  },
}

config = withMdx({
  extension: /\.(md|mdx)$/,
})(config)

config = withOptimizedImages(Object.assign(config, {
  handleImages: ['jpeg', 'png', 'svg'],
}))

module.exports = config;