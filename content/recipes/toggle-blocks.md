---
title: "Toggle blocks on and off"
seo:
  page_title: "Toggle blocks on and off"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-10-03
---

To easily allow content blocks to be toggled on and off add an enabled parameter to your front matter for each block. 

```
hero:
  enabled: true
  heading: Hero Heading
  body: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae turpis massa sed elementum.
```

You can then check whether or not that block is enabled in your templates before you choose to display anything.

```
{{ if .Params.hero.enabled }}
    {{ with .Params.hero }}
    <h1>{{ .heading }}</h1>
    <p>{{ .body }}</p>
    {{ end }}
{{ end }}
```
