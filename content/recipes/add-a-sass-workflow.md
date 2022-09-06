---
title: "Add a Sass workflow with Hugo Pipes and Post.CSS"
seo:
  page_title: "Add a Sass workflow with Hugo Pipes and Post.CSS"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-08-01
categories:
  - Design
---

Hugo comes with built in processing for SASS/SCSS with their pipes system. In order to process an asset with Hugo Pipes, it must be retrieved as a Resource using resources.Get or resources.GetRemote so it needs to live in the assets folder of your website. You also need to have the Hugo extended version for SASS/SCSS processing.

## Autoprefixing and remove unused CSS with PostCSS and PurgeCSS

resources.PostCSS does require nodeJS to run. If you are okay with a touch of npm in your environment, you should definitely give it a spin.

Hugo will look for a PostCSS config file at the root of our theme or project under the name postcss.config.js. Ours looks like this:

```
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
      ],
    }),
  ],
}
```

Hugo needs postcss-cli to process PostCSS so we should install it along our unique PostCSS plugin: autoprefixer. Once we have happily run npm install, we can safely use PostCSS on our style file:


Our final looks like this: 

```
{{ $scss := resources.Get "scss/main.scss" | toCSS }}
{{ $postcss := $scss | resources.PostCSS | minify }}
<link rel="stylesheet" href="{{ $postcss.Permalink }}" media="screen" />
```

The compilation happens automatically when you run the build command hugo or hugo server.