---
title: "Create and range a navigation menu"
seo:
  page_title: "Create and range a navigation menu"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-09-12
---

Hugo has a couple of different ways to build navigation menus and I found this to be confusing when building my first Hugo websites. The simplest approach is to use front matter. Hugo allows you to add content to a menu via the content’s front matter.

```
title: About
menu:
  main:
    weight: 1
```

Range through any menu items that we have in our front matter.

```
<ul class="nav-list">
    {{ range .Site.Menus.main }}
        <li class="nav-list__item">
            <a class="nav-list__link" href="{{ .URL }}" aria-label="{{ .Name }}">{{ .Name }}</a>
        </li>   
    {{ end }}
</ul>
```

Add children pages to range through and create dropdown menus

```
menu:
  main:
    parent: Our Parent Page
```

Check for and range through our children and create sub menus for any menu items that have children.

```
<ul class="nav-list">
    {{ range .Site.Menus.main }}
        {{ if .HasChildren }}
        <li class="nav-list__item">
            <a class="nav-list__link" href="{{ .URL }}" aria-label="{{ .Name }}">{{ .Name }}<span class="sub-menu-indicator"></span></a>
            <div class="nav-list__sub-menu sub-menu">
                <ul class="sub-menu__inner">
                    {{ range sort .Children "value" "desc" }}
                    <li class="sub-menu__item">
                        <a class="sub-menu__link" href="{{ .URL }}" aria-label="{{ .Name }}">{{ .Name }}</a>
                    </li>
                    {{ end }}
                </ul>
            </div>
        </li>
        {{ else }}
        <li class="nav-list__item">
            <a class="nav-list__link" href="{{ .URL }}" aria-label="{{ .Name }}">{{ .Name }}</a>
        </li> 
        {{ end }}
    {{ end }}
</ul>
```