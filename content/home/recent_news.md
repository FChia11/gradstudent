---
# Recent News

active: true
widget: pages  # See https://sourcethemes.com/academic/docs/page-builder/
headless: true  # This file represents a page section.
weight: 30  # Order that this section will appear.

title: News
subtitle: ''
active: true
widget: pages
headless: true
weight: 30
design:
  spacing:
    view: compact
    columns: '2'
    spacing:
      padding:
        - 0
        - 0
        - 0
        - 0
advanced:
  css_style: ""
  css_class: ""
---

{{< readfromfile "/content/newslist.dat" 5 >}} 