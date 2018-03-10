const autoprefixer = require('autoprefixer')
const postcssPxtorem = require('postcss-pxtorem')

module.exports = {
  plugins: [autoprefixer(), postcssPxtorem()],
}

