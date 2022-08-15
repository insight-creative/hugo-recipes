---
title: "Create a Blog Category List"
seo:
  page_title: "Create a Blog Category List"
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