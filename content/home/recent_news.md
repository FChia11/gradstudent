---
# Recent News

active: true
widget: pages  # See https://sourcethemes.com/academic/docs/page-builder/
headless: true  # This file represents a page section.
weight: 30  # Order that this section will appear.

title: News
subtitle: ''

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  view: compact
  columns: '2'
  spacing: 
    padding:
      - 0
      - 0
      - 0
      - 0
      
[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""
---

{{< readfromfile "/content/newslist.dat" 5 >}} 