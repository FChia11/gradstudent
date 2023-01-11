---
# An instance of the Pages widget.
# Documentation: https://wowchemy.com/docs/page-builder/
active: true
widget: pages

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 30

title: Research
subtitle: ''

content:
  # Filter on criteria
  filters:
    folders:
      - publication
    tag: ''
    category: ''
    publication_type: ''
    author: ''
    exclude_featured: false
    exclude_future: false
    exclude_past: false
  # Choose how many pages you would like to display (0 = all pages)
  count: 0
  # Choose how many pages you would like to offset by
  offset: 0
  # Page order: descending (desc) or ascending (asc) date.
  order: desc
design:
  # Choose a view for the listings:
  view: compact
  columns: '2'
  
[design.background]
#Apply a background color, gradient, or image.
#Uncomment (by removing `#`) an option to apply it.
#Choose a light or dark text color by setting `text_color_light`.
#Any HTML color name or Hex value is valid.

  # Background color.
  color = "navy"

  # Background gradient.
  gradient_start = "DeepSkyBlue"
  gradient_end = "SkyBlue"

  # Background image.
  # image = "background.jpg"  # Name of image in `static/media/`.
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.

  # Text color (true=light or false=dark).
  text_color_light = true  

---