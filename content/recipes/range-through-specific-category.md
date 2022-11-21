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

Front matter:

```
featured: true
```

Template:

```
{{ range where (where .Site.RegularPages "Type" "blog") "Params.featured" "=" true }}
  <li>{{ .Title }}</li>
{{ end }}
```

Range through a specific category of posts. Ex. ranging through posts of a featured category.

Front matter: 

```
categories: 
  - Featured
```

Template:

```
<ol>
{{ range where .Site.RegularPages "Params.categories" "intersect" (slice "Featured") }}
    <li>
        <a href="{{ .Permalink }}">{{ .Title }}</a>
    </li>
{{ end }}
</ol>
```

Exclude category from a range of posts. Ex. excluding a featured category from the list of blog posts

```
{{ $recipes := where .Site.RegularPages "Section" "recipes" }}
<ol>
    {{ range $recipes }}
    {{ if not (in .Params.categories "Featured") }}
    <li>
        <a href="{{ .Permalink }}">{{ .Title }}</a>
    </li>
    {{ end }}
    {{ end }}
</ol>
```

Range through a specific category of posts within Paginator. Ex. ranging through a posts of a featured category. 

```
{{ range (.Paginate ( where .Site.RegularPages "Type" "blog" )).Pages }}
    {{ if in .Params.categories "Featured" }}
        <li>{{ .Title }}</li>
    {{ end }}
{{ end }}
```

Range through posts within Paginator while excluding a specific category.

```
{{ range (.Paginate ( where .Site.RegularPages "Type" "blog" )).Pages }}
    {{ if not (in .Params.categories "Featured") }}
        <li>{{ .Title }}</li>
    {{ end }}
{{ end }}
```