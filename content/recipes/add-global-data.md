---
title: "Add global data"
seo:
  page_title: "Add global data"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-09-19
---

Global data files allow you to store data in a single file and reference it in all of your templates. It can be handy for adding general business data about the website to various pages, but has lots of other uses as well.

Add a folder called data

Within data/, create a file called site_settings.yml

```
logo: /uploads/Insight-Logo-White.png
footer_logo: /uploads/Insight-Logo-White.png
business_name: Insight Creative, Inc.
email: ""
address:
  city: "Green Bay"
  state: "WI"
  street: "1816 Sal Street"
  zip: "54302"
social_media:
  - title: Facebook
    link: https://www.facebook.com/insightcreativeinc
  - title: Twitter
    link: https://twitter.com/insightwi
  - title: Instagram
    link: https://www.instagram.com/insightwi/
  - title: YouTube
    link: https://www.youtube.com/channel/UCDE7J9ImgM3JVgT030sM3VA
  - title: LinkedIn
    link: https://www.linkedin.com/company/insight-creative-inc./mycompany/
```

You can then access this data in your templates using site variables:

```
<a class="brand-logo" href="{{ site.BaseURL }}">
  {{ if .Site.Data.site_settings.logo }}
    <img src="{{ .Site.Data.site_settings.logo | absURL }}" alt="{{ .Site.Data.site_settings.business_name }} logo" class="img-responsive dim" width="200" height="100">
  {{ else }}
    <h1>{{ site.Title }}</h1>
  {{ end }}
</a>
```
