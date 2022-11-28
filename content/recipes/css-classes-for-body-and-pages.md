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

A trick I originally learned from WordPress templates is to add a class on the body to identify the page being viewed. Similar to how WordPress adds a page-id class and a page-template class for every page. This helps you have page-specific classes to write custom CSS style rules.

Adding a variable {{ $pageParent := lower .CurrentSection.Title | anchorize }} allows us to create a custom class based on the page title of a parent page of each section. Adding a custom class of parent-page-{{ $pageParent }} allows us to style all pages that live within that section. With the .CurrentSection.Title we can grab the title of the parent page of a section. To ensure our class works with page titles of multiple words, we'll pass it through the anchorize function. Ex. a section titled About Us, will output a class parent-page-about-us. 

Add the below to your baseof.html file to automatically add body classes to all pages.

Template:

```
{{ $pageParent := lower .CurrentSection.Title | anchorize }}

<body class="{{ if $pageParent }}parent-page-{{ $pageParent }}{{ end }}">
```

Adding a {{ .Params.page_class }} allows us to add specific classes to an individual page and add style rules just for this specific page.

Front matter:

```
page_class: custom-class
```

Check for a page_class and add page_class to our main to style pages individually.

Template:

```
<body class="{{ if .Params.page_class }} {{ .Params.page_class }}{{ end }}">
{{ block "main" . }}{{ end }}
</body>
```

Adding a variable {{ $mainClass := lower .Page.Title | anchorize}} allows us to create a custom class based on the page title of each page. With the .Page.Title we can grab the title of the parent page of a section then add it to a custom variable page-{{ $mainClass }}. To ensure our class works with page titles of multiple words, we'll pass it through the urlize function. Ex. a page titled About Us, will output a class page-about-us. 

Template:

```
{{ $mainClass := lower .Page.Title | anchorize}}

<body class="page-{{ $mainClass }}">
{{ block "main" . }}{{ end }}
</body>
```

Combine them all together for the most flexibility.

Template:

```
{{ $mainClass := lower .Page.Title | anchorize}}
{{ $pageParent := lower .CurrentSection.Title | anchorize }}

<body class="page-{{ $mainClass }}{{ if .Params.page_class }} {{ .Params.page_class }}{{ end }}{{ if $pageParent }} parent-page-{{ $pageParent }}{{ end }}">
{{ block "main" . }}{{ end }}
</body>
```

