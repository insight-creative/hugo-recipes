const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './layouts/**/*.svg',
        './content/**/*.md',
      ],
      safelist: [
        'is-active',
        'nav-open',
        'collapse',
        'expand',
        'committed-to-community',
        'swiper-pagination-bullet',
        'swiper-pagination-bullet-active',
        'blockquote',
        'has-search-open',
        'search',
        'pre',
        'code',
      ],
    }),
  ],
}