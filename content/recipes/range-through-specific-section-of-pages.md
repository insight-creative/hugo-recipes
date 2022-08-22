---
title: "Range through a specific section of pages from anywhere on your website"
seo:
  page_title: "Range through a specific section of pages from anywhere on your website"
  meta_description:
  featured_image:
  featured_image_alt:
---

```
<ul>
  {{ $pages := where .Site.RegularPages "Section" "our-pages" }}
  {{ range $pages }}
  <li>
    <a href="{{ .Permalink }}">{{ .Title }}</a>
  </li>
  {{ end }}
</ul>
```

or

```
<ul>
    {{ $pages := where .Site.RegularPages "Type" "blog" }}
    {{ range $pages }}
    <li>
      <a href="{{ .Permalink }}">{{ .Title }}</a>
    </li>
    {{ end }}
</ul>
```
