---
title: "Filter posts and pages by parameter"
seo:
  page_title: "Filter posts and pages by parameter"
  meta_description:
  featured_image:
  featured_image_alt:
date: 2022-09-19
---

You can filter through posts or pages by using the .ByParam method.

```
<!-- Ranges through content according to the "rating" field set in front matter -->
{{ range (.Pages.ByParam "rating") }}
  <!-- ... -->
{{ end }}
```

In the following example we created an events display where we check for expired events and remove them from the display.  

```
<!-- Grab a collection of all our pages -->
{{ $pages := .Site.RegularPages }}
    <!-- Filter pages of the type events -->
    {{ $events := where $pages "Type" "events" }}
    <!-- Range through pages and order pages with the event.date parameter -->
    {{ range $events.ByParam "event.date" }}
    {{ $now := now.Format "2006-01-02" }}
    {{ $start := (dateFormat "2006-01-02" .Params.event.date) }}
    <!-- Check to see if our event date is greater than todays date. This will check for our future events and remove expired events. -->
    {{ if ge $start $now }}
        {{ .Render "event-card" }}
    {{ end }}
{{ end }}
```