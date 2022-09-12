---
title: "Range through a specific category of posts"
seo:
  page_title: "Range through a specific category of posts"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-09-06
---

Range through a specific category of posts based on a parameter.

```
{{ range where (where .Site.RegularPages "Type" "blog") "Params.featured" "=" true }}
  <li>{{ .Title }}</li>
{{ end }}
```

Range through a specific category of posts. Ex. ranging through a posts of a featured category. 

```
{{ range (.Paginate ( where .Site.RegularPages "Type" "blog" )).Pages }}
    {{ if in .Params.categories "Featured" }}
        <li>{{ .Title }}</li>
    {{ end }}
{{ end }}
```

Range through posts while excluding a specific category.

```
{{ range (.Paginate ( where .Site.RegularPages "Type" "blog" )).Pages }}
    {{ if not (in .Params.categories "Featured") }}
        <li>{{ .Title }}</li>
    {{ end }}
{{ end }}
```