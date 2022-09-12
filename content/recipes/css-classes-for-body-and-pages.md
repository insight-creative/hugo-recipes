---
title: "CSS classes for body and pages"
seo:
  page_title: "CSS classes for body and pages"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-09-12
---

Tips for layout templating with Hugo. 

A trick I originally learned from WordPress templates is to add a class on the body to identify the page being viewed. This helps you have page-specific style rules.

Adding a parent-page-{{ $pageParent | urlize }} allows us to style all pages that live within that section. 

Add the below to your baseof.html file to automatically add body classes to all pages.

```
{{ $pageParent := lower .CurrentSection.Title }}

<body class="{{ if $pageParent }}parent-page-{{ $pageParent | urlize }}{{ end }}">
```

Adding a {{ .Params.page_class }} allows us to add specific classes to an individual page and add style rules just for this specific page.

```
page_class: custom-class
```

Check for a page_class and add page_class to our main to style pages individually.

```
<main id="main-content" class="site-main {{ if .Params.page_class }}{{ .Params.page_class }} {{ end }}{{ $mainClass | urlize | anchorize }}">
{{ partial "breadcrumbs" . }}
{{ block "main" . }}{{ end }}
</main>
```

