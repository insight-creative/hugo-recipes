---
title: "Create a blog feed"
seo:
  page_title: "Create a blog feed"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-09-19
---

Create a blog feed of three of your most recent blog posts. Typical block that we'll build into a homepage on a large and active website.

```
{{ $recentPosts := where .Site.RegularPages "Type" "resources" }}
{{ range first 3 $recentPosts }}
<article>
    <a href="{{ .Permalink }}">
        <h3>{{ .Title | markdownify }}</h3>
        <p>{{ .Summary  | safeHTML | truncate 125 }}</p>
    </a>
</article>
{{ end }}
```
