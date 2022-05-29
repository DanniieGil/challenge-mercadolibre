const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['localhost', 'challenge-mercadolibre.vercel.app'],
  },
  async redirects() {
    return [];
  },
}