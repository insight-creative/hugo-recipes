---
title: "Create a blog category list"
seo:
  page_title: "Create a blog category list"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-08-03
categories: 
  - Featured
featured: true
---

If you wish to display the list of all keys for your site’s taxonomy, you can retrieve them from the .Site variable available on every page.

This may take the form of a tag cloud, a menu, or simply a list. To display a list of your website's categories:

```
<div>
  <h2>Categories</h2>
  <ul>
    {{ range .Site.Taxonomies.categories }}
            <li><a href="{{ .Page.Permalink }}">{{ .Page.Title }}</a> ({{ .Count }})</li>
    {{ end }}
  </ul>
</div>
```

or display a list of your website's tags:

```
<div>
  <h2>Tags</h2>
  <ul>
    {{ range .Site.Taxonomies.tags }}
            <li><a href="{{ .Page.Permalink }}">{{ .Page.Title }}</a> ({{ .Count }})</li>
    {{ end }}
  </ul>
</div>
```
