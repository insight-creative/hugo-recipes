---
title: "Create a blog category list"
seo:
  page_title: "Create a blog category list"
  meta_description:
  featured_image:
  featured_image_alt:
---

```
<div class="sidebar">
  <h2>Categories</h2>
  {{ range (.Site.GetPage "taxonomyTerm" "categories").Pages }}
    <a href="{{ .Permalink }}">{{ .Title }}</a></li>
  {{ end }}
</div>
```
